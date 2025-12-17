import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ], 
  theme: {
    extend: {
      colors: {
        primary: '#414A37',
        accent: '#99744A',
        'background-light': '#f6f7f8',
        'background-dark': '#101922',
        'background-alt': '#DBC2A6',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [forms],
};
