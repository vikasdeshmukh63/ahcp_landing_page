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
import { features } from '../data/features.js'

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
    <section
      id="features"
      className="border-t border-ink/5 bg-cream px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Platform"
            title="Everything you need, all in"
            highlight="one place"
            className="max-w-3xl"
          />
          <Button variant="dark" className="shrink-0 px-6 py-2.5">
            Get Started
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = iconMap[f.icon] || Users
            return (
              <article
                key={f.title}
                className="rounded-2xl border border-ink/5 bg-card p-6 shadow-sm transition hover:border-ink/10 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-lime/90 text-ink">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
