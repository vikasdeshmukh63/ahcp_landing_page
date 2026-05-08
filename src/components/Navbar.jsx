import Button from './ui/Button.jsx'

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-full border border-ink/10 bg-white/90 p-2 shadow-[0_10px_30px_-14px_rgba(15,23,42,0.45)] backdrop-blur-md">
        <nav className="flex items-center justify-between gap-4">
          <a href="#top" className="flex h-12 items-center rounded-full px-4 text-lg font-bold tracking-tight text-ink">
            ETIP
          </a>
          <Button variant="primary" className="h-12 px-6 text-base">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  )
}
