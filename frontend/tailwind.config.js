/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "Helvetica", "Arial", "Lucida", "sans-serif"], // Custom font stack
        Fredoka: ["Fredoka"],
        Deca: ["Lexend Deca"],
      },
      colors: {
        blueSky: ["#78B7EA"],
        lightBlue: ["#325bff"],
        lightGreen: ["#2cca73"],
      },
    },
  },
  plugins: [],
};
