/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#37B6E9",
        secondary:"rgba(99, 180, 255,0.1)",
        secondaryDark:"rgba(99, 180, 255,0.5)",
        accent:"#4894FE",
      }
    },
  },
  plugins: [],
}

