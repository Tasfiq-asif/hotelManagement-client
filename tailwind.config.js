/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#EEEBDD',
        richRed: '#810000',
        deepMaroon: '#630000',
        almostBlack: '#1B1717',
      },
    },
  },
  plugins: [],
}