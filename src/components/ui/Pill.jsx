export default function Pill({ children, className = '' }) {
  return (
    <span
      className={`inline-block rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted ${className}`}
    >
      {children}
    </span>
  )
}
