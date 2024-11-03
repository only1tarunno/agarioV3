/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*'],
  // coustomize your brand style
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        black: {
          1: '#1F1F1F',
          2: '#545454',
        },
        gray: {
          1: '#E5EDF0',
          2: '#EAF5F5',
          3: '#363636',
        },
        green: {
          1: '#206F6A',
          2: '#2179A1',
        },
      },
      boxShadow: {
        userboxshadow: '2px 3px 30px 0px #BACCD429',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
