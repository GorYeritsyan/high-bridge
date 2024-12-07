/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
