/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        reading: ['Lora', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        parchment: {
          50: '#FCFBF8',
          100: '#FBF9F5',
          200: '#F4EFE6',
          300: '#E7DFD2',
          400: '#D5C7B3',
        },
        terracotta: {
          50: '#FDF7F4',
          100: '#FAECE6',
          500: '#D96E47',
          600: '#C85A32',
          700: '#A74623',
          800: '#87371A',
        },
        bronze: {
          500: '#A48256',
          600: '#8C6D46',
          700: '#735735',
        },
        ink: {
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#0A0A0A',
        }
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}