const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      orange: colors.orange
    },
    borderRadius:{
      1:"1px",
      none:'0px',
      sm:"2px",
      lg:"4px",
      xl:"6px"
    },
    dark:{
      test:"10px"
    },
    extend: {}
  },
  plugins: []
}
