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

      animation: {
        bounceRight: "bounceRight 1s ease-out",
        slideLeft: "slideLeft 1s ease-out",
      },

      keyframes: {
        bounceRight: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "80%": { transform: "translateX(5%)" },
          "100%": { opacity: "100%", transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40%)" },
          "80%": { transform: "translateX(-2%)" },
          "100%": { opacity: "100%", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
