/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00703C', // green from logo
        secondary: '#D7261E', // red from logo
        accent: '#FFE03A', // yellow from logo
        neutral: '#F8F4F1', // off-white from logo center
        dark: '#000000', // black background
      },
    },
  },
  plugins: [],
}
