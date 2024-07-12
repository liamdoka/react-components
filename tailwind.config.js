const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
        accent: colors.emerald,
      },
    },
  },
  plugins: [],
};
