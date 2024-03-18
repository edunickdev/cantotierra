import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F99319",
        secondary: "#b73e02",
        tertiary: "#103B51",
      },
      fontFamily: {
        sans: ["CantoTierra", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

