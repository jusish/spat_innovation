/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "1px 2px 8px green",
      },
    },
    colors: {
      mycolor: "#1B8036",
      white: "#FFFFFF",
      gray: "#464749",
      black: "#000",
      moregray: "#C4C4C4",
      textgray: "#7C7C7C",
    },
  },
  plugins: [],
};
