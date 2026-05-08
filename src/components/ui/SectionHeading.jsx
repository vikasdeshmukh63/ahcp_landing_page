/**
 * @param {object} props
 * @param {string} [props.eyebrow]
 * @param {string} props.title — plain text before highlight
 * @param {string} [props.highlight] — segment styled with lime background
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
      ? 'text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl'
      : 'text-2xl font-bold tracking-tight text-ink sm:text-3xl'

  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-wide text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={titleClass}>
        {title}
        {highlight ? (
          <>
            {' '}
            <span className="rounded-md bg-lime px-1.5 py-0.5">{highlight}</span>
          </>
        ) : null}
        {afterHighlight}
      </h2>
    </div>
  )
}
