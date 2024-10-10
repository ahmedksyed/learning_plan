/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode using the 'dark' class
  content: ["./src/**/*.{html,js}","*"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontSize: {
        mammoth: '6rem',
      },
      colors: {
        'success' : '#0f9b0f',
        'error'   : '#ff0000',
        'warning'  : '#ff8c00',
      }
    },
  },
  plugins: [],
}

