/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabin': ['Cabin', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'josefinslab': ['Josefin Slab', 'serif']
      },
      colors: {
        'custom-blue': "#437f86",

      },
    },
  },
  plugins: [],
}
