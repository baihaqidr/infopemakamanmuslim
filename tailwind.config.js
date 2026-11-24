/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'D:/vibe coding application/infopemakamanmuslim/index.html',
    'D:/vibe coding application/infopemakamanmuslim/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#143D31',
          emerald: '#1A4D3E',
          emeraldLight: '#236551',
          gold: '#D4AF37',
          goldLight: '#F1D676',
          goldDark: '#B5952F',
          sand: '#FAF8F5',
          cream: '#F4EFE6',
          dark: '#1C2421',
          muted: '#5F6C66'
        }
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
}
