/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      main: ["Open Sans", "sans-serif"],
      hero: ["Saira Extra Condensed", "cursive", "serif"],
    },

    extend: {
      animation: {
        bounceRight: "bounceRight 1s ease-out",
        slideLeft: "slideLeft 1s ease-out",
        slideTop: "slideTop 1s ease-out",
        rubberband: "rubberband 0.8s ease-out",
        bounceFast: "bounce 0.5s infinite",
      },
      backgroundImage: {
        stripes:
          "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
      },
      borderWidth: {
        6: "6px",
      },
      colors: {
        "primary-200": "hsl(17, 80%, 80%)",
        "primary-400": "hsl(17, 80%, 60%)",
        "primary-500": "hsl(17, 70%, 60%)",
        "primary-600": "hsl(17, 54%, 48%)",
        "primary-700": "hsl(17, 54%, 43%)",
        "primary-800": "hsl(17, 54%, 35%)",
      },
      height: {
        // screen: "100dvh",
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
        slideTop: {
          "0%": { opacity: "0", transform: "translateY(40%)" },
          "80%": { transform: "translateY(-2%)" },
          "100%": { opacity: "100%", transform: "translateY(0)" },
        },
        rubberband: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scaleX(1.12) scaleY(0.75)" },
          "55%": { transform: "scaleX(0.85) scaleY(1)" },
          "65%": { transform: "scaleX(1.09) scaleY(0.85)" },
          "75%": { transform: "scaleX(0.9) scaleY(1)" },
          "90%": { transform: "scaleX(1.05) scaleY(0.95)" },
        },
      },
      screens: {
        xs: "400px",
      },
      zIndex: {
        selectMenu: "60",
        toTopBtn: "70",
        footer: "71",
        sidebarContainer: "80",
        sidebarBtn: "81",
      },
    },
  },
  plugins: [],
};
