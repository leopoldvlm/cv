/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      
    },
    fontFamily: {
      'noto': ["'Noto Sans'", 'sans-serif'],
      'urbanist': ['Urbanist', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class'
};
