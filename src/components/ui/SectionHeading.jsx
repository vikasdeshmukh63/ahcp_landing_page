/**
 * @param {object} props
 * @param {string} [props.eyebrow]
 * @param {string} props.title — plain text before highlight
 * @param {string} [props.highlight] — segment styled in brand accent
 * @param {string} [props.afterHighlight] — text after highlight
 * @param {'sm' | 'lg'} [props.size='lg']
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  afterHighlight = '',
  size = 'lg',
  className = '',
}) {
  const titleClass =
    size === 'lg'
      ? 'text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl'
      : 'text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl'

  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-wide text-[rgb(var(--accent-rgb))]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={titleClass}>
        {title}
        {highlight ? (
          <>
            {' '}
            <span className="text-[rgb(var(--accent-rgb))]">{highlight}</span>
          </>
        ) : null}
        {afterHighlight}
      </h2>
    </div>
  )
}
