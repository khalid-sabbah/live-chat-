/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chatBlue: "#EFF6FC",
        customPurp: "#9747FF",
      },
    },
  },
  plugins: [],
};
