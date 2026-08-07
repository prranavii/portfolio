/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          surface: '#141414',
          elevated: '#1A1A1A',
          border: '#1E1E1E',
        },
        warm: {
          DEFAULT: '#E8E4DE',
          secondary: '#6B6B6B',
          faint: '#3A3A3A',
        },
        accent: {
          DEFAULT: '#C4A35A',
          dim: 'rgba(196, 163, 90, 0.15)',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
