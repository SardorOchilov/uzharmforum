/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        s9: '991px',
        lg: '1000px',
      },
      colors: {
        'light-white': 'hsla(0, 0%, 100%, .102)',
        main: '#06b48b',
        secondary: '#078b6c',
        'dark-green': '#064636',
        'transparent-white': 'rgba(255,255,255,0.82)',
        'dark-blue': '#1c2f3f',
        'light-gray': '#ebf2f0',
        'light-border': 'rgba(28, 47, 63, .2)',
        'light-green': '#e0f6f1',
      },
    },
  },
  plugins: [],
}
