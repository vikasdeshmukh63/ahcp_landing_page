/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        esds: {
          white: '#FFFFFF',
          ivory: '#FAF7F2',
          saffron: '#E87722',
          'saffron-deep': '#C95F0E',
          'solar-dawn': '#FFA940',
          emerald: '#0F7B3E',
          sage: '#2E9D5F',
          'emerald-deep': '#0A5C2D',
          navy: '#1A2B4A',
          ink: '#0D1B3A',
          gold: '#C9A961',
          sandalwood: '#E8D094',
          teal: '#0EA5E9',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Times New Roman', 'serif'],
        editorial: ['Fraunces', 'Georgia', 'serif'],
        expressive: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        functional: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '40ch',
      },
      borderRadius: {
        esds: '0.5rem',
        'esds-lg': '0.75rem',
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle, rgba(26,43,74,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        dot: '24px 24px',
      },
      letterSpacing: {
        display: '0.2em',
      },
    },
  },
  plugins: [],
}
