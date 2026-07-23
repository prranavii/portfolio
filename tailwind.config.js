/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0A0B10',
          light: '#12131C',
          lighter: '#1E2030',
        },
        'accent-cyan': {
          DEFAULT: '#00F2FE',
          dim: 'rgba(0, 242, 254, 0.15)',
          glow: 'rgba(0, 242, 254, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-travel': 'grid-travel 24s linear infinite',
      },
      keyframes: {
        'grid-travel': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        }
      }
    },
  },
  plugins: [],
}
