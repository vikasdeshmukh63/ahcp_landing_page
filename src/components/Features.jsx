import {
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  Globe,
  Clock,
} from 'lucide-react'
import Button from './ui/Button.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import ParallaxSection from './ui/ParallaxSection.jsx'
import { features } from '../data/features.js'
import { motion } from 'motion/react'
import { scrollCardMotion, staggerContainer, staggerItem } from '../lib/scrollMotion.js'

const iconMap = {
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  Globe,
  Clock,
}

export default function Features() {
  return (
    <ParallaxSection id="features" className="esds-section" strength={72}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={staggerItem} className="max-w-3xl">
            <SectionHeading
              eyebrow="Platform"
              title="Everything you need, all in"
              highlight="One place"
              className="max-w-3xl"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <Button variant="primary" className="shrink-0 px-6 py-2.5">
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        <div className="esds-divider-gold mx-auto mt-10 max-w-xs" aria-hidden />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = iconMap[f.icon] || Users
            return (
              <motion.article
                key={f.title}
                className="esds-card"
                {...scrollCardMotion()}
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[rgb(var(--accent-rgb))]/12 text-[rgb(var(--accent-rgb))]">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="font-editorial text-lg font-semibold text-esds-navy">{f.title}</h3>
                <p className="mt-2 font-functional text-sm leading-relaxed text-esds-ink/70">
                  {f.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </ParallaxSection>
  )
}
