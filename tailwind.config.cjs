/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': '#222831',
        'gray-charcoal': '#2C3440',
        'cian-turquoise': '#29A19C',
        'yellow-orange': '#ECCA75',
        'red-orange': '#F05454'
      }
    }
  },
  plugins: []
}
