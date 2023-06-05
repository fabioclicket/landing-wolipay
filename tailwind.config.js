/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { width: '0px' },
          '100%': { width: '60%' },
        },
      },
      animation: {
        fade: 'fade 0.5s ease',
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        home: '40% 60%',
      },
      fontFamily: {
        body: ['Mabry Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
