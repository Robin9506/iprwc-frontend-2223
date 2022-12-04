/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    
    extend: {fontFamily: {
      'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      ipRed:{
        100: '#780000',
        200: '#C1121F'
      },
      ipBaige: '#FDF0D5',
      ipNight: '#003049',
      ipGrue: '#669BBC'
    },
    }
  },
  plugins: [],
}
