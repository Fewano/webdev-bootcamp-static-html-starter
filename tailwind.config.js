/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#9370DB",
        "wd-white": "#FFFFFF",
        "wd-grey": "#999999",
        "wd-brand": "#898989",
        "wd-darkgrey": "#2D2D2D",
        "wd-black": "#080808",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to left, rgba(0,0,0, 0), rgba(0,0,0,1)), url('../assets/hero/hero.jpg')",
      },
      fontFamily: {
        sans: ["poppins", "Arial", "sans-serif"],
      },
      fontFamily: {
        sans: ["poppins", "Arial", "sans-serif"],
      }
    },
  },
  plugins: [],
};
