/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        custom: "25px",
      },
      colors: {
        gray: "rgb(245,247,250)",
        "primary-dark": "rgb(52,60,106)",
        "primary-light": "rgba(45,96,255)",
        border: "rgb(230,239,245)",
      },

      content: {
        checkbox: 'url("/src/assets/images/checkbox-icon.svg")',
      },
    },
    screens: {
      custom: "1440px",
    },
  },
  plugins: [],
};
