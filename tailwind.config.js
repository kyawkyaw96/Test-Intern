/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'smm': "320px",
        'md': "768px",
        'xxl': "1920px",
      },
      fontFamily:{
        'roboto':['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
};
