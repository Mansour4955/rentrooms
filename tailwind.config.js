/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins",
      },
      colors: {
        buttonColor: "#ff9900",
      },
      boxShadow: {
        shadowOne: "-1px 4px 20px -6px rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
