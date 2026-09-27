/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bubblegum': '#FF69B4',
        'blush': '#FFC0CB',
        'hot-pink': '#FF1493',
        'creamy-white': '#FFF8F0',
        'deep-plum': '#800080',
        'electric-blue': '#7DF9FF',
      },
      fontFamily: {
        display: ['"Dancing Script"', 'cursive'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}