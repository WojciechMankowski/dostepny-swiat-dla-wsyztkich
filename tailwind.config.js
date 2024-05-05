/** @type {import('tailwindcss').Config} */

const color = {
  main: "#23c7d9",
  akcent1: "#f27127",
  akcent2: "#e7c500",
  akcent3: "#086788",
  colortext: "black",
  background: "#dfdfdf",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: color },
  },
  plugins: [],
};
