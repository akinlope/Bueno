/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "14440px",
    },
    colors: {
      priGreen: "#7ea33e",
      priGray: "#858f9a",
      priBlack: "#15222f",
      secBlack: "#121d28",
      pureBlack: "#000000",
      priBlue: "#acdaee",
      secBlue: "#209bd0",
      pureBlue: "#213347",
      priBrown: "#707070",
      pureWhite: "#ffffff",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 5px 15px rgba(0, 0, 0, 0.35) ",
      },
      borderRadius: {
        'curve': '2.4rem',
      }
    },
  },
  plugins: [],
};
