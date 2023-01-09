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
        billboard: "url('/src/assets/billboard.png')",
        bogolan: "url('/src/assets/bogolan.png')",
        expansion: "url('/src/assets/expansion.png')",
        indigo: "url('/src/assets/indigo.png')",
        journalhero: "url('/src/assets/journalhero.png')",
        piper: "url('/src/assets/piper.png')",
        rock: "url('/src/assets/rock.png')",
        tamed: "url('/src/assets/tamed.png')",
        thegarden: "url('/src/assets/thegarden.png')",
      },
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
