/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily : {
        'custom-font' : "Urbanist, sans-serif",
      },
      textColor: {
        "grey-shade-color" : "rgb(91, 91, 91)"
      },
      borderColor:{
        'custom-border-grey' : 'rgb(215, 215, 215)'
      },
      backgroundColor:{
        "custom-blue-color" : "rgb(229, 241, 255)"
      }
      
    },
  },
  plugins: [],
}

