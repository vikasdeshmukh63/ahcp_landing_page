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
      ? 'font-display text-balance text-3xl font-semibold uppercase leading-tight tracking-display text-esds-navy sm:text-4xl md:text-5xl'
      : 'font-display text-2xl font-semibold uppercase leading-tight tracking-display text-esds-navy sm:text-3xl'

  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow ? <p className="esds-eyebrow">{eyebrow}</p> : null}
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
