import SectionHeading from './ui/SectionHeading.jsx'
import ParallaxSection from './ui/ParallaxSection.jsx'
import { autonomousModules } from '../data/autonomousFlow.js'
import { motion } from 'motion/react'
import { scrollCardMotion, staggerContainer, staggerItem } from '../lib/scrollMotion.js'

export default function Architecture() {
  return (
    <ParallaxSection id="architecture" className="esds-section" strength={64}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={staggerItem}>
            <SectionHeading
              eyebrow="Platform Architecture"
              title="Complete autonomous ATS flow"
              highlight="in 10 connected modules"
              className="max-w-4xl"
            />
          </motion.div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {autonomousModules.map((module, index) => (
            <motion.article
              key={module.title}
              className="esds-card p-5"
              {...scrollCardMotion()}
              whileHover={{ y: -4 }}
            >
              <p className="esds-eyebrow text-[10px]">
                Module {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-editorial text-base font-semibold leading-snug text-esds-navy">
                {module.title}
              </h3>
              <p className="mt-2 font-functional text-sm leading-relaxed text-esds-ink/70">{module.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
