/** Easing for scroll-reveal cards */
export const easeScroll = [0.22, 1, 0.36, 1]

/** Viewport: card animates when it crosses into view */
export const scrollCardViewport = {
  once: true,
  amount: 0.22,
  margin: '0px 0px -8% 0px',
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function motionOffsets(reducedMotion, compact) {
  if (reducedMotion) {
    return { y: 0, scale: 1, duration: 0.01 }
  }
  if (compact) {
    return { y: 24, scale: 0.98, duration: 0.48 }
  }
  return { y: 40, scale: 0.97, duration: 0.55 }
}

/**
 * Props for motion cards — pass `reducedMotion` from useReducedMotion().
 * Animations are subtler on viewports under 768px when `compact` is omitted.
 */
export function scrollCardMotion({ reducedMotion, compact } = {}) {
  const reduce = reducedMotion ?? prefersReducedMotion()
  const isCompact =
    compact ?? (typeof window !== 'undefined' && window.innerWidth < 768)
  const { y, scale, duration } = motionOffsets(reduce, isCompact)

  if (reduce) {
    return {
      initial: { opacity: 1, y: 0, scale: 1 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      viewport: scrollCardViewport,
      transition: { duration: 0.01 },
    }
  }

  return {
    initial: { opacity: 0, y, scale },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: scrollCardViewport,
    transition: { duration, ease: easeScroll },
  }
}

/** Staggered children (heading + row) */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeScroll },
  },
}

export const staggerItemReduced = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.01 } },
}
