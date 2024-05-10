const color = {
  main: "#23c7d9",
  akcent1: "#f27127",
  akcent2: "#e7c500",
  akcent3: "#086788",
  colortext: "black",
  background: "#dfdfdf",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...color,
      },
    },
  },
  plugins: [],
};
