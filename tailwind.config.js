/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(bg|text|border)-(lavender|candy|lucky|neon|desert|bee)-(light|med|dark|nav|navlink|special)/,
      variants: ['dark', 'hover', 'focus', 'peer-checked', 'after'],
    }
  ],
  theme: {
    extend: {
      colors:{
        lavender: {
          light: "#FFF8FA",
          med: "#F6CFDB",
          dark: "#323033",
          nav: "#73528C",
          navlink: "#F6CFDB",
          special: "#BF6FFF"    
        },
        candy: {
          light: "#F9F0F8",
          med: "#F6CFDB",
          dark: "#051D32",
          nav: "#016E86",
          navlink: "#F6CFDB",
          special: "#2FAFCB"    
        },
        bee: {
          light: "#FFF8EB",
          med: "#FECF72",
          dark: "#00161D",
          nav: "#521400",
          navlink: "#FECF72",
          special: "#FF4242"    
        },
      }
    },
  },
  variants: {},
  plugins: [],
  darkMode: 'class'
};