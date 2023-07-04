/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white' : '#ffffff',
      'black' : '#000000',
      'goldenrod' : '#daa520',
      'wheat' : '#f5deb3',
      'whitesmoke' : '#f5f5f5'
    },
    boxShadow: {
      'sm' : '0 0 10px 5px black',
      DEFAULT : '0 0 20px 10px black',
      'md' : '0 0 40px 20px black',
      'lg' : '0 0 60px 30px black',
      'xl' : '0 0 80px 40px black',
      '2xl' : '0 0 100px 50px black',
      'inner-sm' : 'inset 0 0 10px 5px black',
      'inner' : 'inset 0 0 20px 10px black',
      'inner-md' : 'inset 0 0 40px 40px black',
      'inner-lg' : 'inset 0 0 60px 60px black',
      'inner-xl' : 'inset 0 0 80px 80px black',
      'inner-2xl' : 'inset 0 0 100px 100px black'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
      },
      height: {
        'header': '5%',
        '1/10' : '10%',
        '2/10' : '20%',
        '3/10' : '30%',
        '4/10' : '40%',
        '5/10' : '50%',
        '6/10' : '60%',
        '7/10' : '70%',
        '8/10' : '80%',
        '9/10' : '90%',
        'footer' : '15%'
      },
      minHeight: {
        'header': '5%',
        '1/10' : '10%',
        '2/10' : '20%',
        '3/10' : '30%',
        '4/10' : '40%',
        '5/10' : '50%',
        '6/10' : '60%',
        '7/10' : '70%',
        '8/10' : '80%',
        '9/10' : '90%',
        'footer' : '15%'
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
        
        'footer' : '15%'
      }
    }
  },
  plugins: [],
}
