/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: ["./node_modules/react-icons.em"],
});


