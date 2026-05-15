import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, useReducedMotion } from 'motion/react'

function parallaxMultiplier(width) {
  if (width < 640) return 0.3
  if (width < 1024) return 0.55
  return 1
}

/**
 * Scroll-driven parallax for section backgrounds (slow layer + blob).
 * @param {number} [strength=70] pixels-ish travel at full scroll through section
 */
export function useSectionParallax(strength = 70) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const [mul, setMul] = useState(1)

  useEffect(() => {
    const update = () => setMul(parallaxMultiplier(window.innerWidth))
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const effective = strength * mul

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const layerY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [effective * 0.5, -effective * 0.5],
  )
  const blobY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [effective * 0.9, -effective * 0.9],
  )

  return { ref, layerY, blobY, reduceMotion }
}
