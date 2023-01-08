/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000",
      },
      fontFamily: {
        abril: ["Abril Fatface", "cursive"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        smiling: "url('/src/assets/smiling.png')",
        sleeping: "url('/src/assets/sleeping.png')",
        posed: "url('/src/assets/posed.png')",
        hooded: "url('/src/assets/hooded.png')",
        skin: "url('/src/assets/skin.png')",
        garden: "url('/src/assets/garden.png')",
        storyhero: "url('/src/assets/ourstoryhero.png)",
      },
    },
    screens: {
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
