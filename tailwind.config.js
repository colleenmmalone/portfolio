/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
          red: '#611C35',
          cream: {
            DEFAULT: '#FFF7D6',
            light: '#FFF7D644'
          },
          clay:{
            DEFAULT: '#C57B57',
            light: '#F1AB86'
          },
          blue: '#50858B',
          purple: '#2D1E2F'
      }
    },
  },
  variants: {},
  plugins: [],
  darkMode: 'class'
};