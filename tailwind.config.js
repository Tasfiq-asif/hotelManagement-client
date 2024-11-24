/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#630000",
          "secondary": "#810000",
          "accent": "#EEEBDD",
          "neutral": "#1B1717",
          "base-100": "#FFFFFF",
          "base-200": "#F2F2F2",
          "base-300": "#E5E5E5",
          "base-content": "#1B1717",
        },
        dark: {
          "primary": "#630000",
          "secondary": "#810000",
          "accent": "#EEEBDD",
          "neutral": "#1B1717",
          "base-100": "#1B1717",
          "base-200": "#2B2B2B",
          "base-300": "#3B3B3B",
          "base-content": "#FFFFFF",
        },
      },
    ],
  },
};

