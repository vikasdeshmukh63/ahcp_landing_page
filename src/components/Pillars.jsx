import {
  Brain,
  CalendarCheck2,
  Database,
  FileSearch,
  MessageSquare,
  Mic,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { motion } from 'motion/react'
import SectionHeading from './ui/SectionHeading.jsx'
import ParallaxSection from './ui/ParallaxSection.jsx'
import { hiringPillars } from '../data/pillars.js'
import { scrollCardMotion, staggerContainer, staggerItem } from '../lib/scrollMotion.js'

const iconMap = {
  FileSearch,
  ShieldCheck,
  Brain,
  Mic,
  MessageSquare,
  Users,
  CalendarCheck2,
  Database,
}

export default function Pillars() {
  return (
    <ParallaxSection id="pillars" className="esds-section" strength={76}>
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
              eyebrow="Core Capabilities"
              title="8 Pillars of Intelligent"
              highlight="Hiring"
              className="[&_h2]:mx-auto"
            />
          </motion.div>
          <motion.p
            variants={staggerItem}
            className="mt-4 font-functional text-sm text-esds-ink/70 sm:text-base"
          >
            End-to-end autonomous recruitment powered by sovereign AI.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hiringPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || FileSearch
            return (
              <motion.article
                key={pillar.title}
                className="esds-card p-5"
                {...scrollCardMotion()}
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--accent-rgb))]/12 text-[rgb(var(--accent-rgb))]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                </div>
                <h3 className="font-editorial text-base font-semibold text-esds-navy">{pillar.title}</h3>
                <p className="mt-2 font-functional text-sm leading-relaxed text-esds-ink/70">
                  {pillar.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </ParallaxSection>
  )
}
