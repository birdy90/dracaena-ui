const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'card-appear': 'card-appear 0.1s ease-in-out',
        'wiggle': 'wiggle 0.3s linear infinite',
        'contour': 'contour 3s linear infinite',
        'spin-slow': 'spin 1s ease-in-out infinite'
      },
      keyframes: {
        'card-appear': {
          '0%': { transform: 'perspective(700px) scale(0.75) translateY(-20%) rotateX(45deg)' },
          '100%': { transform: 'perspective(700px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'contour': {
          '0%': { transform: 'scale(1)' },
          '33%': { opacity: 1 },
          '66%': { transform: 'scale(1.33)', opacity: 0 },
          '100%': { opacity: 0 },
        },
      },
      transitionProperty: {
        'size': 'width, height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'halved': 'cubic-bezier(1,-2,0,2)',
      }
    }
  },
  plugins: [
      rotateY,
  ],
}
