/**
 * @param {object} props
 * @param {'primary' | 'ghost' | 'dark'} [props.variant='primary']
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
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'

  const variants = {
    primary:
      'bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:scale-[0.98]',
    ghost:
      'border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 active:scale-[0.98]',
    dark: 'bg-blue-900 text-white hover:bg-blue-950 active:scale-[0.98]',
  }

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
