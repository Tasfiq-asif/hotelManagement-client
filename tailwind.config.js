/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EEEBDD',
        secondary: '#810000',
        primary: '#630000',
        almostBlack: '#1B1717',
      },
      fontFamily:{
        sans: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}