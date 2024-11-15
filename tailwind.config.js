/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crete: ["Crete Round", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        purple: "#6C5DD3",
        lightGrey: "#8F95B2",
      },
    },
  },
  plugins: [],
};
