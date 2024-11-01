/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        "react-black":"#282c34",
        "react-blue":"#61dafb"
      }
    },
  },
  plugins: [],
}

// bg-blue-300
// bg-react-black
// text-react-black