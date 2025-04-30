/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2D3142',
        secondary: '#4F5D75',
        neutral: '#BFC0C0',
        accent: '#EF8354',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        'custom': '8px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
};