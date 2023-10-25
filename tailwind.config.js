/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      main: ["Open Sans", "sans-serif"],
      hero: ["Saira Extra Condensed", "cursive", "serif"],
    },

    extend: {
      /* Screen Sizes */
      screens: {
        xs: "400px",
      },

      /* Colors */
      colors: {
        "primary-200": "hsl(17, 80%, 80%)",
        "primary-400": "hsl(17, 80%, 60%)",
        "primary-500": "hsl(17, 70%, 60%)",
        "primary-600": "hsl(17, 54%, 48%)",
        "primary-800": "hsl(17, 54%, 35%)",
      },

      /* Positioning */
      zIndex: {
        sidebarContainer: "20",
        sidebarBtn: "90",
      },

      height: {
        screen: "100dvh",
      },

      /* Borders */
      borderWidth: {
        6: "6px",
      },

      /* Background Image / Gradients */
      backgroundImage: {
        stripes:
          "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
      },

      /* Animation */
      animation: {
        bounceRight: "bounceRight 1s ease-out",
        slideLeft: "slideLeft 1s ease-out",
        stripesProgress: "stripesProgress 2s linear infinite",
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
        stripesProgress: {
          "0%": {
            "background-position": "40px 0",
          },
          "100%": {
            "background-position": "0 0",
          },
        },
      },
    },
  },
  plugins: [],
};
