/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'iphone': '350px',
        'android': '450px',
        'ipad': '650px',
        'tablet': '850px',
        'desktop': '1200px',
      },
      fontFamily:{
         'sofia':['Sofia', 'sans-serif'],
         'sangLight':['sangLight', 'sans-serif'],
         'sangRegular':['sangRegular', 'sans-serif']
      }
    },
    clipPath:{
      'myCircle': 'circle(50%)',
    }
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}