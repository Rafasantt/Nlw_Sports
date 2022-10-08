module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      animation: {
        slideLeft: 'moveToRight 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        moveToRight: {
          '0%' : { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-394px)' },
        }
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
      screens: {
        'lg': {'max': '1024px'},
        'mg': {'max': '768px'},
        'sm': {'max': '468px'},
        'fld': {'max': '350px'}
      },
    },
  },
  plugins: [],
}
