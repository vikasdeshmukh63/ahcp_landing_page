import { Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import ParallaxSection from './ui/ParallaxSection.jsx'
import { processSteps } from '../data/process.js'
import { autonomousStages } from '../data/autonomousFlow.js'
import { motion } from 'motion/react'
import { scrollCardMotion, staggerContainer, staggerItem } from '../lib/scrollMotion.js'

export default function Process() {
  return (
    <ParallaxSection id="process" className="esds-section-alt" strength={80}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={staggerItem}>
            <SectionHeading
              eyebrow="How it works"
              title="From requisition to onboarding in a"
              highlight="Single autonomous flow"
            />
          </motion.div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {autonomousStages.map((stage, index) => (
            <motion.article
              key={stage.id}
              className="rounded-xl border border-[rgb(var(--navy-rgb))]/10 bg-white p-4 shadow-sm hover:border-[rgb(var(--accent-rgb))]/35"
              {...scrollCardMotion()}
              whileHover={{ y: -4 }}
            >
              <p className="esds-eyebrow text-[10px]">Stage {index + 1}</p>
              <h3 className="mt-1 font-editorial text-sm font-semibold text-esds-navy">{stage.title}</h3>
              <p className="mt-1 font-functional text-xs leading-relaxed text-esds-ink/65">{stage.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 space-y-16 lg:space-y-20">
          {processSteps.map((step, index) => {
            const imageRight = index % 2 === 0
            return (
              <motion.div
                key={step.id}
                className="grid gap-10 md:grid-cols-2 md:items-center lg:gap-16"
                {...scrollCardMotion()}
              >
                <div
                  className={`flex min-w-0 items-start gap-6 md:gap-8 ${imageRight ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className="relative flex w-10 shrink-0 flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-rgb))] font-functional text-sm font-bold text-white shadow-sm ring-4 ring-esds-ivory">
                      {step.id}
                    </span>
                    {index < processSteps.length - 1 ? (
                      <span
                        className="mt-2 flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(var(--navy-rgb))]/15 bg-white text-[rgb(var(--accent-rgb))] md:hidden"
                        aria-hidden
                      >
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1 pb-2">
                    <h3 className="font-editorial text-2xl font-semibold leading-tight text-esds-navy">{step.title}</h3>
                    <p className="mt-3 max-w-xl font-functional text-lg leading-relaxed text-esds-ink/70">
                      {step.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  className={`mx-auto w-full max-w-md ${imageRight ? 'md:order-2' : 'md:order-1'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <img
                    src={step.illustration.blue}
                    alt={step.title}
                    className="h-auto max-h-[min(56vw,320px)] w-full rounded-xl border border-[rgb(var(--navy-rgb))]/10 object-cover shadow-[0_12px_40px_-20px_rgba(26,43,74,0.2)] sm:max-h-none"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </ParallaxSection>
  )
}
