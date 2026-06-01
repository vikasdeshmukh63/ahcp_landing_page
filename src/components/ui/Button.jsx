/**
 * @param {object} props
 * @param {'primary' | 'secondary' | 'ghost' | 'lime'} [props.variant='primary']
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Button({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...rest
}) {
  const base =
    'inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-6 py-3 font-functional text-[15px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-rgb))]'

  const resolved = variant === 'lime' ? 'primary' : variant

  const variants = {
    primary:
      'bg-esds-saffron text-white shadow-sm hover:bg-esds-saffron-deep active:scale-[0.98]',
    secondary:
      'bg-esds-navy text-white shadow-sm hover:bg-esds-ink active:scale-[0.98]',
    ghost:
      'border border-esds-navy/25 bg-transparent text-esds-navy hover:border-esds-navy/40 hover:bg-esds-navy/[0.04] active:scale-[0.98]',
  }

  return (
    <button
      type={type}
      className={`${base} ${variants[resolved] || variants.primary} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
