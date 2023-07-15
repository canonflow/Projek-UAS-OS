/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html, js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [
    require("daisyui"),
  ],
}

