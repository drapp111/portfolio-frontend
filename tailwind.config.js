/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'dark-green' : '#091E05',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'white' : '#ffffff',
        'goldenrod' : '#daa520',
        'wheat' : '#f5deb3',
        'whitesmoke' : '#f5f5f5',
        'jet' : '#333533',
        'night': '#0A0A0A',
        'eerie' : '#1F1F1F'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily : {
        'title' : ['RoxboroughCF'],
        'subtitle' : ['Lora'],
        'body' : ['Lora'],
      },
      fontSize: {
        'mobile' : '.5rem'
      },
      height: {
        '1/10' : '10%',
        '2/10' : '20%',
        '3/10' : '30%',
        '4/10' : '40%',
        '5/10' : '50%',
        '6/10' : '60%',
        '7/10' : '70%',
        '8/10' : '80%',
        '9/10' : '90%',
        'header': '5vh',
        'footer' : '5vh',
        'footer-mobile' : '35vh',
        'main' : '90vh',
        'mobile-nav': '10vh'
      },
      minHeight: {
        '1/10' : '10%',
        '2/10' : '20%',
        '3/10' : '30%',
        '4/10' : '40%',
        '5/10' : '50%',
        '6/10' : '60%',
        '7/10' : '70%',
        '8/10' : '80%',
        '9/10' : '90%',
        'header': '5vh',
        'footer' : '10vh',
        'footer-mobile' : '20vh',
        'main' : '80vh'
      },
      maxHeight: {
        '1/10' : '10%',
        '2/10' : '20%',
        '3/10' : '30%',
        '4/10' : '40%',
        '5/10' : '50%',
        '6/10' : '60%',
        '7/10' : '70%',
        '8/10' : '80%',
        '9/10' : '90%',
        'header': '5vh',
        'footer' : '5vh',
        'footer-mobile' : '15vh',
        'main' : '80vh'
      },
      dropShadow : {
        'card' : [
          '0 1px 2px rgb(39 52 68 / 0.05)'
        ]
      },
      boxShadow: {
        'inner-sm' : 'inset 0 0 10px 5px black',
        'inner' : 'inset 0 0 20px 10px black',
        'inner-md' : 'inset 0 0 40px 40px black',
        'inner-lg' : 'inset 0 0 60px 60px black',
        'inner-xl' : 'inset 0 0 80px 80px black',
        'inner-2xl' : 'inset 0 0 100px 100px black',
        'shine-sm' : '0 0 10px 5px',
        'shine' : '0 0 20px 10px',
        'shine-md' : '0 0 40px 20px',
        'shine-lg' : '0 0 60px 30px',
        'shine-xl' : '0 0 80px 40px',
        'shine-2xl' : '0 0 100px 50px',
        'footer' : '0 -5px 5px -3px gray'
      },
    },
    
  },
  plugins: [require("flowbite/plugin")],
}