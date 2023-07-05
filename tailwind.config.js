/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347',
        secondary: '#6C757D',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}