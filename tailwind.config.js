/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFCF9',
          100: '#FAF7F0',
          200: '#F4ECE1',
          300: '#E8DCB8',
          800: '#3D342B',
          900: '#231F1B',
        },
        ink: {
          900: '#141413',
          800: '#222220',
          700: '#383835',
          600: '#5C5B56',
        },
        terracotta: {
          500: '#C05638',
          600: '#A34226',
          700: '#82311A',
        },
        bronze: {
          500: '#A9844B',
          600: '#8E6D38',
          700: '#6B5024',
        },
        sage: {
          600: '#4A6B5D',
          700: '#395348',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        reading: ['"Lora"', '"Merriweather"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}