import { Quote } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import ParallaxSection from './ui/ParallaxSection.jsx'
import { testimonialQuotes } from '../data/testimonials.js'
import { motion } from 'motion/react'
import { scrollCardMotion, staggerContainer, staggerItem } from '../lib/scrollMotion.js'

export default function Testimonials() {
  return (
    <ParallaxSection id="stories" className="esds-section-alt" strength={74}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={staggerItem} className="relative max-w-xl">
            <SectionHeading
              eyebrow="Social proof"
              title="Want to see real"
              highlight="Client stories?"
            />
          </motion.div>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonialQuotes.map((t) => (
            <motion.figure
              key={t.name}
              className={`flex flex-col rounded-xl p-6 ${t.tint}`}
              {...scrollCardMotion()}
              whileHover={{ y: -4 }}
            >
              <Quote
                className="h-8 w-8 shrink-0 text-[rgb(var(--accent-rgb))]"
                fill="currentColor"
                strokeWidth={0}
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 font-expressive text-base italic leading-relaxed text-esds-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-[rgb(var(--navy-rgb))]/10 pt-4">
                <p className="font-functional text-sm font-semibold text-esds-navy">{t.name}</p>
                <p className="font-functional text-xs text-esds-ink/60">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
