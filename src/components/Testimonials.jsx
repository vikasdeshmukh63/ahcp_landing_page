import { Quote } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import {
  testimonialFaces,
  testimonialQuotes,
} from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section
      id="stories"
      className="border-t border-ink/5 bg-cream px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative max-w-xl">
            <SectionHeading
              eyebrow="Social proof"
              title="Want to see real"
              highlight="client stories?"
            />
            <svg
              className="absolute -right-4 top-12 hidden h-16 w-16 rotate-12 text-ink/30 lg:block"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden
            >
              <path
                d="M8 48 Q 24 8 56 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M52 20 L56 24 L50 26"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-0 lg:justify-end lg:pt-4">
            {testimonialFaces.map((face, i) => (
              <div
                key={face.id}
                className={`-ml-3 first:ml-0 sm:-ml-4 first:sm:ml-0`}
                style={{ zIndex: testimonialFaces.length - i }}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white text-sm font-bold text-ink shadow-md ring-2 ${face.bg} ${face.ring}`}
                >
                  {face.initials}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonialQuotes.map((t) => (
            <figure
              key={t.name}
              className={`flex flex-col rounded-2xl border border-ink/5 p-6 shadow-sm ${t.tint}`}
            >
              <Quote
                className="h-8 w-8 shrink-0 text-lime"
                fill="currentColor"
                strokeWidth={0}
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 text-sm font-medium leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
