/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      main: ["Open Sans", "sans-serif"],
      hero: ["Saira Extra Condensed", "cursive", "serif"],
    },

    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        primary: "#bd5d38",
      },

      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
