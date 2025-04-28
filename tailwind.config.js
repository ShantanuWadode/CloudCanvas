/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d4ff',
          300: '#a3b8ff',
          400: '#7a91ff',
          500: '#5b6bf7',
          600: '#4f46e5',
          700: '#3730c1',
          800: '#2e299e',
          900: '#272566',
          950: '#171438',
        },
      },
    },
  },
  plugins: [],
};