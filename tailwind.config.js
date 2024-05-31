const withMT = require("@material-tailwind/html/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    './src/views/**/*.{html, js, ejs}',
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
})

