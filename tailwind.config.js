/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand:  '#0044FF',
        'brand-dark': '#002ECC',
        ink:    '#0A0A1A',
        muted:  '#6B7280',
      },
      fontFamily: {
        display: ['"Oswald"', 'Impact', '"Arial Black"', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.65s ease-out both',
        'fade-in':  'fadeIn 0.5s ease-out both',
        'scale-in': 'scaleIn 0.45s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          to:   { opacity: '1', transform: 'scale(1)   translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}