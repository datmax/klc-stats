module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        themeblue: "#08D4B0"
      },
      backgroundImage:{
        bg : "url('/kaibabg.webp')",
      } 
    },
  },
  plugins: [],
}
