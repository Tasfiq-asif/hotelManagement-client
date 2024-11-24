/** @type {import('tailwindcss').Config} */
import daisyuiThemes from 'daisyui/src/theming/themes';
import daisyui from 'daisyui';

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
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyuiThemes.light, // Spread the light theme
          primary: '#630000',
          secondary: '#810000',
          accent: '#EEEBDD',
          neutral: '#1B1717',
          'base-100': '#FFFFFF', // Light background
          'base-content': '#1B1717', // Dark text for light mode
        },
      },
      {
        dark: {
          ...daisyuiThemes.dark, // Spread the dark theme
          primary: '#630000',
          secondary: '#810000',
          accent: '#EEEBDD',
          neutral: '#1B1717',
          'base-100': '#1B1717', // Dark background
          'base-content': '#FFFFFF', // White text for dark mode
        },
      },
    ],
  },
};
