import { useEffect, useRef, useState } from 'react'
import {
  BookOpen,
  Calculator,
  ChevronDown,
  Eye,
  Lightbulb,
  Server,
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import ParallaxSection from './ui/ParallaxSection.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import {
  aptitudePanelsByRole,
  aptitudeRoles,
} from '../data/adaptiveAssessments.js'
import { scrollCardMotion, staggerContainer, staggerItem } from '../lib/scrollMotion.js'

const aptitudeTabs = [
  { id: 'esds', label: 'ESDS Specific', Icon: Server },
  { id: 'reasoning', label: 'Reasoning', Icon: Lightbulb },
  { id: 'english', label: 'English', Icon: BookOpen },
  { id: 'quantitative', label: 'Quantitative', Icon: Calculator },
  { id: 'image-perception', label: 'Image Perception', Icon: Eye },
]

const tabTitleById = Object.fromEntries(
  aptitudeTabs.map((t) => [t.id, t.label]),
)

const imageGradient = {
  sky: 'from-[rgb(var(--accent-rgb))]/25 via-slate-500/10 to-transparent',
  emerald: 'from-emerald-400/20 via-slate-500/10 to-transparent',
}

const tagClass = {
  sky: 'text-[rgb(var(--accent-rgb))]',
  emerald: 'text-emerald-400',
}

export default function AdaptiveAssessments() {
  const [roleId, setRoleId] = useState(aptitudeRoles[0].id)
  const [tabId, setTabId] = useState(aptitudeTabs[0].id)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const roleLabel =
    aptitudeRoles.find((r) => r.id === roleId)?.label ?? aptitudeRoles[0].label
  const panel = aptitudePanelsByRole[roleId]?.[tabId]
  const questions = panel?.questions ?? []
  const count = questions.length
  const tabLabel = tabTitleById[tabId] ?? 'Assessment'
  const ActiveIcon = aptitudeTabs.find((t) => t.id === tabId)?.Icon ?? Server

  useEffect(() => {
    function handle(e) {
      if (!menuRef.current?.contains(e.target)) setMenuOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('pointerdown', handle)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', handle)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <ParallaxSection
      id="aptitude"
      className="border-t border-white/5 bg-[#040814] px-4 py-20 sm:px-6 lg:px-8"
      strength={64}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={staggerItem}>
            <SectionHeading
              eyebrow="Adaptive Assessments"
              title="5-Tab Smart"
              highlight="Aptitude"
              className="[&_h2]:text-center"
            />
          </motion.div>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-sm text-slate-400 sm:text-base"
          >
            Questions adapt in real-time based on candidate role and skill level
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-8 flex max-w-md justify-center"
          ref={menuRef}
          {...scrollCardMotion()}
        >
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm text-white shadow-sm backdrop-blur-sm transition hover:border-[rgb(var(--accent-rgb))]/40"
            aria-expanded={menuOpen}
            aria-haspopup="listbox"
          >
            <span className="text-slate-500">ROLE:</span>
            <span className="font-semibold text-slate-200">{roleLabel}</span>
            <ChevronDown
              className={`h-4 w-4 text-slate-500 transition ${menuOpen ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </button>
          <AnimatePresence>
            {menuOpen ? (
              <motion.ul
                role="listbox"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="absolute top-full z-20 mt-2 w-full min-w-[240px] overflow-hidden rounded-xl border border-white/10 bg-[#0c1426] p-1 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.75)]"
              >
                {aptitudeRoles.map((r) => (
                  <li key={r.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={r.id === roleId}
                      onClick={() => {
                        setRoleId(r.id)
                        setMenuOpen(false)
                      }}
                      className={`flex w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                        r.id === roleId
                          ? 'bg-[rgb(var(--accent-rgb))]/15 text-[rgb(var(--accent-rgb))]'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      {r.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="touch-scroll-x -mx-1 mt-8 flex items-center justify-start gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:pb-0"
          {...scrollCardMotion()}
        >
          {aptitudeTabs.map(({ id, label, Icon }) => {
            const active = id === tabId
            return (
              <button
                key={id}
                type="button"
                onClick={() => setTabId(id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                  active
                    ? 'border-transparent bg-[rgb(var(--accent-rgb))] text-[rgb(var(--accent-contrast-rgb))] shadow-lg shadow-[rgb(var(--accent-rgb))]/25'
                    : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200'
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2.2} />
                {label}
              </button>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:p-8"
          {...scrollCardMotion()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${roleId}-${tabId}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[rgb(var(--accent-rgb))]/15 text-[rgb(var(--accent-rgb))]">
                    <ActiveIcon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {tabLabel} — {roleLabel}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      AI-generated, adaptive difficulty
                    </p>
                  </div>
                </div>
                <span className="shrink-0 self-start rounded-full border border-[rgb(var(--accent-rgb))]/30 bg-[rgb(var(--accent-rgb))]/10 px-3 py-1 text-xs font-semibold text-[rgb(var(--accent-rgb))] sm:self-auto">
                  {count} {count === 1 ? 'Question' : 'Questions'}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {questions.map((q, i) => (
                  <li key={i}>
                    <div className="rounded-2xl border border-white/10 bg-[#0c1426]/80 p-4">
                      <div className="flex gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-rgb))]/20 text-xs font-bold text-[rgb(var(--accent-rgb))]">
                          {i + 1}
                        </span>
                        <p className="min-w-0 pt-0.5 text-sm leading-relaxed text-slate-200 sm:text-base">
                          {q.text}
                        </p>
                      </div>
                      {q.image ? (
                        <div
                          className={`mt-4 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b p-4 ${imageGradient[q.image.variant]}`}
                        >
                          <div className="rounded-lg bg-white/[0.04] px-3 py-8 text-center">
                            <span className="text-2xl" aria-hidden>
                              {q.image.variant === 'sky' ? '⛰️' : '🤝'}
                            </span>
                            <p className="mt-3 text-sm italic text-slate-400">
                              {q.image.caption}
                            </p>
                            <p
                              className={`mt-4 text-sm font-semibold ${tagClass[q.image.variant]}`}
                            >
                              {q.image.tag}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3 rounded-2xl border border-[rgb(var(--accent-rgb))]/20 bg-[rgb(var(--accent-rgb))]/10 px-4 py-3 text-sm leading-relaxed text-slate-300">
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--accent-rgb))]"
                  strokeWidth={2}
                  aria-hidden
                />
                <p>
                  <span className="font-semibold text-[rgb(var(--accent-rgb))]">
                    AI Adaptive:{' '}
                  </span>
                  Questions adjust in real-time based on {roleLabel} responses, skill level,
                  and role seniority.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
