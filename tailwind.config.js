/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--bg-paper)',
          light: 'var(--bg-paper-light)',
          dark: 'var(--bg-paper-dark)',
          border: 'var(--border-paper)',
          line: 'var(--border-paper-line)',
        },
        accent: 'var(--accent)',
        ink: {
          DEFAULT: 'var(--text-ink)',
          secondary: 'var(--text-ink-secondary)',
          muted: 'var(--text-ink-muted)',
          faint: 'var(--text-ink-faint)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"Courier Prime"', '"Space Mono"', '"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
