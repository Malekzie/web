/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.{html, js}',
    './public/**/*.{css, js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['MedievalSharp', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

