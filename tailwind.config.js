const colors = require("tailwindcss/colors");
const heropatterns = require("tailwindcss-hero-patterns/src/patterns");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "selector",
  theme: {
    heroPatterns: {
      dots: heropatterns.polkadots,
      hexagons: heropatterns.hexagons,
      hideout: heropatterns.hideout,
    },
    heroPatternColors: [colors.primary, colors.accent],
    extend: {
      colors: {
        primary: colors.zinc,
        accent: colors.emerald,
      },
      spacing: {
        "screen-sm": "480px",
        "screen-md": "640px",
        "screen-lg": "1024px",
      },
    },
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
