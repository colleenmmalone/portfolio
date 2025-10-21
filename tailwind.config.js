/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(bg|text|border|from|via|to)-(special|darkest|darker|medium|light|lighter|lightest)/,
      variants: ['hover', 'active', 'focus', 'peer-checked', 'after', 'peer-checked:after'],
    }
  ],
  theme: {
    extend: {
      colors:{
        special: "#95FDF2",
        darkest: "#191120", 
        darker: "#30243B", 
        medium: "#40314F", 
        light: "#6F5488", 
        lighter: "#B28DDC", 
        lightest: "#CFA4FF"
      },
      animation: {
        'slide': 'slide 3s ease-out',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
    },
  },
  variants: {},
  plugins: [],
  darkMode: 'class'
};