/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "white": "#FFFFFF",
        "light-gray": "#E1E1E1",
      },
      backgroundImage: {
        'gradient-to-right': 'linear-gradient(to right, #6B73FF, #000DFF, #FF5B5B, #FFA42C)',
      },
      backgroundClip: {
        'text': 'text',
      },
      fontFamily: {
        'inter': "Inter", 
      }
    },
  },
  plugins: [],
};
