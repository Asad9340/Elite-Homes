/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: '"Poppins", sans-serif',
      },
      colors: {
        primary: '#001F3F',
        secondary: '#6A0DAD',
        textPrimary: '#666666',
        textSecondary: '#F0EDE5',
      },
    },
  },
  plugins: [],
};
