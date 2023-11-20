/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif']
      }
    },

  },
  plugins: [],
}

