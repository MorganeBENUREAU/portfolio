/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefinslab': ['Josefin Slab', 'serif'],
        'cabin': ['Cabin', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        
      },
      colors: {
        'custom-grey': "#e5e5e5",
        'custom-blue': "#437f86"

      },
    },
  },
  plugins: [],
}
