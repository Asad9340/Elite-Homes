/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: '"Poppins", sans-serif',
      },
      colors: {
        primary: '#03002e',
        secondary: '#6A0DAD',
        textPrimary: '#666666',
        textSecondary: '#F0EDE5',
      },
    },
  },
  plugins: [],
});
