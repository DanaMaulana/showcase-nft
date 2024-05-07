/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'bad-script': ['Bad Script', 'cursive'],
      'raleway': ['Raleway', 'cursive'],
    },
    extend: {
      colors: {
        'warna-text': '#B6B1DE',
        'hijau': '#C7FA76',
        'ungu': '#2D1959',
        'pink': '#F2418F',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

