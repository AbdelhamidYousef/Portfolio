/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#bd5d38",
      },

      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
