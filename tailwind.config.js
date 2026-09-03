/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F0EBE1',
          light: '#F8F5EE',
          dark: '#E5DED2',
          border: '#D8D1C3',
          line: '#C8C0B0',
        },
        ink: {
          DEFAULT: '#141414',
          secondary: '#4A4742',
          muted: '#888075',
          faint: '#B8B0A2',
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
