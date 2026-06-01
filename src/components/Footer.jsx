import Button from './ui/Button.jsx'
import { footerColumns, socialLinks } from '../data/footer.js'
import { motion } from 'motion/react'
import { scrollCardMotion, staggerContainer, staggerItem } from '../lib/scrollMotion.js'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-esds-navy px-4 pb-12 pt-16 text-white sm:px-6 lg:px-8">
      <div className="esds-divider-gold mx-auto mb-12 max-w-7xl opacity-80" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <motion.div key={col.title} {...scrollCardMotion()}>
              <p className="font-functional text-sm font-bold text-white">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-functional text-sm text-white/70 transition hover:text-[rgb(var(--accent-rgb))]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={staggerItem} className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="ESDS"
              width={72}
              height={72}
              className="h-14 w-auto sm:h-16 md:h-[4.5rem]"
            />
            <span className="font-display text-sm font-semibold uppercase leading-snug tracking-display text-white sm:text-base">
              Enterprise Talent <br />
              Intelligence Platform
            </span>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-center font-functional text-sm text-white/70 md:flex-1"
          >
            © {new Date().getFullYear()} ESDS Software Solution Ltd. All rights reserved.
            <span className="mx-2 hidden sm:inline">·</span>
            <span className="mt-2 flex flex-wrap justify-center gap-4 sm:mt-0 sm:inline-flex">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-white/80 underline-offset-4 hover:text-[rgb(var(--accent-rgb))] hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </span>
          </motion.p>

          <motion.form
            variants={staggerItem}
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center"
            onSubmit={(e) => e.preventDefault()}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Work email"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 font-functional text-sm text-white outline-none placeholder:text-white/45 focus:border-[rgb(var(--accent-rgb))]/50"
            />
            <Button type="submit" variant="primary" className="shrink-0 px-5">
              Subscribe
            </Button>
          </motion.form>
        </motion.div>
      </div>

      <p
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none font-display text-[clamp(4rem,18vw,14rem)] font-bold uppercase leading-none tracking-display text-white/[0.04]"
        aria-hidden
      >
        ESDS
      </p>
    </footer>
  )
}
