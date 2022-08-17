/** @type {import('tailwindcss').Config} */

//these are some preefined styles so that we can reference them later 
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {

        //colors for references 
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {

        //font family reference 
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {

      //these are some screen sizes
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}; 