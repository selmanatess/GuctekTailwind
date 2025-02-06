import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./src/**/*.{html,js,tsx,ts}", // Tailwind'in tarayacağı dosyalar
  ],
  theme:{
    extend: {
      screens: {
        'navmd': '970px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif", ],
        calligraffitti: ["Calligraffitti", "cursive"], 
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
});
