/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  mode: 'jit',
  theme: {
    screens: {
      sm:'600px',
      md:'900px',
      lg: '1200px',
      xl: '1600px',
    },
    fontFamily: {

    },
    opacity: {
      0: '0',
      2: '0.2',
      4: '0.4',
      6: '0.6',
      8: '0.8',
      10: '1',
    },
    backgroundColor: {

    },
    backgroundImage: {

    },
    borderRadius: {

    },
    colors: {

    },
    boxShadow: {

    },

    extend: {
      transitionProperty: {
        default: '.5s',
      },
    },
  },
  plugins: [],
}
