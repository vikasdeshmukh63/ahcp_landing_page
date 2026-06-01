export default function Pill({ children, className = '' }) {
  return (
    <span
      className={`inline-block rounded-full border border-[rgb(var(--navy-rgb))]/15 bg-esds-ivory px-4 py-1.5 font-functional text-[11px] font-semibold uppercase tracking-[0.1em] text-esds-navy/80 ${className}`}
    >
      {children}
    </span>
  )
}
