/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./order.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F5233',
          light: '#4B7F52',
        },
        secondary: {
          DEFAULT: '#D4A373',
          light: '#E6CCB2',
        },
        accent: {
          DEFAULT: '#E85D04',
          light: '#F48C06',
        },
        natural: {
          DEFAULT: '#FEFAE0',
          dark: '#DDA15E',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}