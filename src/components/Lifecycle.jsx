import {
  BadgeCheck,
  BarChart3,
  ClipboardCheck,
  Mic,
  ShieldCheck,
  Upload,
  Users,
} from 'lucide-react'
import { motion } from 'motion/react'
import SectionHeading from './ui/SectionHeading.jsx'
import ParallaxSection from './ui/ParallaxSection.jsx'
import { candidateLifecycleSteps } from '../data/lifecycle.js'
import { scrollCardMotion, staggerContainer, staggerItem } from '../lib/scrollMotion.js'

const iconMap = {
  Upload,
  ShieldCheck,
  ClipboardCheck,
  Mic,
  BarChart3,
  Users,
  BadgeCheck,
}

export default function Lifecycle() {
  return (
    <ParallaxSection id="lifecycle" className="esds-section-alt" strength={70}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={staggerItem}>
            <SectionHeading
              eyebrow="Complete Visibility"
              title="7-Step Candidate"
              highlight="Lifecycle"
              className="[&_h2]:mx-auto"
            />
          </motion.div>
          <motion.p
            variants={staggerItem}
            className="mt-4 font-functional text-sm text-esds-ink/70 sm:text-base"
          >
            Track every candidate from application to onboarding, visible to all stakeholders.
          </motion.p>
        </motion.div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden md:block" aria-hidden>
            <svg viewBox="0 0 1200 2" className="h-[2px] w-full overflow-visible" preserveAspectRatio="none">
              <line
                x1="20"
                y1="1"
                x2="1180"
                y2="1"
                stroke="rgba(26,43,74,0.15)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <motion.line
                x1="20"
                y1="1"
                x2="1180"
                y2="1"
                stroke="rgb(var(--accent-rgb))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="12 14"
                initial={{ strokeDashoffset: 26 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.9, ease: 'linear', repeat: Infinity }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-7">
            {candidateLifecycleSteps.map((step) => {
              const Icon = iconMap[step.icon] || Upload

              return (
                <motion.article
                  key={step.title}
                  className="relative z-10 text-center"
                  {...scrollCardMotion()}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-[rgb(var(--navy-rgb))]/10 bg-white text-[rgb(var(--accent-rgb))] shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-editorial text-sm font-semibold text-esds-navy">{step.title}</h3>
                  <p className="mt-1 font-functional text-xs text-esds-ink/60">{step.subtitle}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
