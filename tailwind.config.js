const color = {
  main: "#23c7d9",
  akcent1: "#f27127",
  akcent2: "#e7c500",
  akcent3: "#086788",
  colortext: "black",
  background: "#dfdfdf",
};

// Requiring necessary modules
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,  // This spreads the existing Tailwind colors
        ...color,  // This adds your custom colors to the Tailwind color palette
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // Assuming addVariablesForColors is correctly defined elsewhere if needed,
    // otherwise, let's define it below.
    function ({ addBase, theme }) {
      let allColors = flattenColorPalette(theme('colors'));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ':root': newVars, 
      });
    },
  ],
};
