/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'green-blue': '#263238',
      },
      height: {
        '99': '80hv',
      }
    },
  },
  plugins: [],
}
