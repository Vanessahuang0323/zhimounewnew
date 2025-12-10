/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: '#8B6F47',
        taroko: '#2C5F7C',
        terracotta: '#B8674E',
        cream: '#F5F3EF',
        charcoal: '#3A3A3A',
        warmOrange: '#D97B4A',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
