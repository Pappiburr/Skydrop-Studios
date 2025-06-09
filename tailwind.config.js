/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['"Roboto Slab"', 'serif'],
      },
      colors: {
        'main-bg': '#F0E1CA',
        'main-text': '#384640',
        'secondary-bg': '#eff4f0',
        'primary': '#384640',
        'secondary': '#6B7280',
      },
    },
  },
  plugins: [],
} 