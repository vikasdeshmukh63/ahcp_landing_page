import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Button from './ui/Button.jsx'

/** Order matches section order in App.jsx (top → bottom). */
const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Stories', href: '#stories' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 w-full border-b border-[rgb(var(--navy-rgb))]/10 bg-white/95 backdrop-blur-md"
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-2 py-4 sm:gap-4 sm:py-5">
          <motion.a
            href="#top"
            className="flex h-10 shrink-0 items-center rounded-lg px-2 sm:h-12"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="ESDS"
              width={52}
              height={52}
              className="h-12 w-auto sm:h-14"
            />
          </motion.a>

          <motion.div className="hidden items-center gap-1 md:flex lg:gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 font-functional text-sm font-semibold text-esds-navy transition hover:text-[rgb(var(--accent-rgb))] lg:px-4"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href="#cta" className="hidden sm:inline">
              <Button variant="primary" className="h-10 px-4 text-sm sm:h-11 sm:px-6">
                Book Now
              </Button>
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-esds-navy/15 text-esds-navy transition hover:bg-esds-ivory md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="mobile-nav"
              className="border-t border-[rgb(var(--navy-rgb))]/10 px-2 pb-4 pt-2 md:hidden"
              initial={reduceMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 font-functional text-sm font-semibold text-esds-navy hover:bg-esds-ivory hover:text-[rgb(var(--accent-rgb))]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a href="#cta" onClick={closeMenu} className="block">
                    <Button variant="primary" className="w-full py-3">
                      Book Now
                    </Button>
                  </a>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
