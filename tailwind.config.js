module.exports = {
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}', './public/assets/**/*.{html,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};