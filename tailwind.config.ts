import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        maindark:'#242424',
        textgray:'#EFEFEF',
        myorange: {
          50: '#FFE9E0',
          100: '#FFDBCC',
          200: '#FFBDA3',
          300: '#FFA07A',
          400: '#FF8352',
          500: '#FF6629',
          600: '#FF4900',
          700: '#C73900',
          800: '#8F2900',
          900: '#571900',
          950: '#3B1100'
        }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
