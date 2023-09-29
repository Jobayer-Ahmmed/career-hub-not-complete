/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        titleColor: "#1A1919",
        textColor: "#757575",
      },
      spacing: {
        xPadding: '176px',
        yMargin: "130px",
      }
    },
  },
  plugins: [require("daisyui")],
}