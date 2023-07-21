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
      inset : {
        '1/10vh' : '10vh',
        '2/10vh' : '20vh',
        '3/10vh' : '30vh',
        '4/10vh' : '40vh',
        '5/10vh' : '50vh',
        '6/10vh' : '60vh',
        '7/10vh' : '70vh',
        '8/10vh' : '80vh',
        '9/10vh' : '90vh'
      },
      colors: {
        'alert' : '#ff0f0f',
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
        '1/10vh' : '10vh',
        '2/10vh' : '20vh',
        '3/10vh' : '30vh',
        '4/10vh' : '40vh',
        '5/10vh' : '50vh',
        '6/10vh' : '60vh',
        '7/10vh' : '70vh',
        '8/10vh' : '80vh',
        '9/10vh' : '90vh',
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
        '1/10vh' : '10vh',
        '2/10vh' : '20vh',
        '3/10vh' : '30vh',
        '4/10vh' : '40vh',
        '5/10vh' : '50vh',
        '6/10vh' : '60vh',
        '7/10vh' : '70vh',
        '8/10vh' : '80vh',
        '9/10vh' : '90vh',
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
        '1/10vh' : '10vh',
        '2/10vh' : '20vh',
        '3/10vh' : '30vh',
        '4/10vh' : '40vh',
        '5/10vh' : '50vh',
        '6/10vh' : '60vh',
        '7/10vh' : '70vh',
        '8/10vh' : '80vh',
        '9/10vh' : '90vh',
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
        'shine-sm' : '0 0 10px 5px black',
        'shine' : '0 0 20px 10px black',
        'shine-md' : '0 0 40px 20px black',
        'shine-lg' : '0 0 60px 30px black',
        'shine-xl' : '0 0 80px 40px black',
        'shine-2xl' : '0 0 100px 50px black',
        'footer' : '0 -5px 5px -3px gray'
      },
      boxShadowColor : {
        'goldenrod' : '#daa520',
        'wheat' : '#f5deb3',
        'whitesmoke' : '#f5f5f5',
        'jet' : '#333533',
        'night': '#0A0A0A',
        'eerie' : '#1F1F1F'
      }
    },
    
  },
  plugins: [require("flowbite/plugin")],
}