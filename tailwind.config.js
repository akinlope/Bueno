/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      danger: "#ee4444",
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
        "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      borderRadius: {
        'curve': '2.4rem',
      },
      minHeight: {
        'hero': '550px',
      },
      spacing: {
        'leafUp': '-70px',
        'leafRight': '-50px',
      },
      margin: {
        'menu': '-10px',
      }
    },
  },
  plugins: [],
};
