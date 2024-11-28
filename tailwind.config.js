/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        'colorpink': "#FFF3ED",
        'skyBlue': "#43BBFF",
        'darkBlue': "#002B43",
        'offBlack': "#1E1E1E",
      },

      fontFamily: {
        'lato': "Lato, sans-serif",
        'Montserrat': "Montserrat , sans-serif",
      }
    },
  },
  plugins: [],
}