/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
        'imprima' : ['Imprima', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
