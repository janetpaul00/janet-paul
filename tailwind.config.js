const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  mode: 'jit',
  plugins: [],
  purge: ['pages/**/*.tsx', 'components/**/*.tsx', 'styles/*.scss'],
  theme: {
    colors,
    extend: {},
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Poppins', 'sans-serif']
    }
  },
  variants: {}
}
