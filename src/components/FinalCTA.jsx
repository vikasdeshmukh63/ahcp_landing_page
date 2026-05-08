import Button from './ui/Button.jsx'

function RunnerFlag({ className = '' }) {
  return (
    <svg
      viewBox="0 0 160 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M32 96 C48 64 56 40 72 32 C88 24 96 36 104 48"
        stroke="#0E0E0E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="56" cy="28" r="9" fill="#0E0E0E" />
      <path
        d="M56 40 L56 96"
        stroke="#0E0E0E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M56 44 L96 36 L96 60 L56 68 Z"
        fill="#C8F23A"
        stroke="#0E0E0E"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function FinalCTA() {
  return (
    <section className="border-t border-ink/5 bg-dot-grid bg-dot-size-dot px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <RunnerFlag className="h-24 w-40" />
        </div>
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Ready to Build Your{' '}
          <span className="rounded-lg bg-lime px-2 py-0.5">
            Elite Remote Team?
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted">
          Join thousands of companies already using Pixel.
        </p>
        <div className="mt-10 flex justify-center">
          <Button variant="dark" className="px-10 py-3.5 text-base">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
