/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      pop: ["Poppins"],
      opsans: ["Open Sans"],
    },
    extend: {
      colors: {
        pink1: "hsl(322, 100%, 66%)",
        lPink: "hsl(321, 100%, 78%)",
        lRed: "hsl(0, 100%, 63%)",
        vdCyan: "hsl(192, 100%, 9%)",
        vpBlue: "hsl(207, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
