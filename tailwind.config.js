/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "rgb(245,247,250)",
        "primary-dark": "rgb(52,60,106)",
        "primary-light": "rgba(45,96,255)",
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
