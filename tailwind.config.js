/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
    },
    extend: {
      colors: {
        resumegreen: {
          DEFAULT: "#478448",
          100: '#a6c2a5',
          200: '#6e9d6d',
          500: '#478448'
        },
      },
    },
  },
  plugins: [],
}
