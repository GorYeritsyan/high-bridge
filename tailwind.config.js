/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        checkbox: 'url("/src/assets/images/checkbox-icon.png")',
      },
    },
    screens: {
      custom: "1440px",
    },
    backgroundImage: {
      "login-background-image":
        "url('/src/assets/images/login-background.png')",
    },
  },
  plugins: [],
};
