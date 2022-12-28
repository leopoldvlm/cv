/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 2s ease-out'
      }
    },
    fontFamily: {
      'noto': ["'Noto Sans'", 'sans-serif'],
      'urbanist': ['Urbanist', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class'
};
