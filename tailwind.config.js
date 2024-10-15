/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        Spartan: ["League Spartan", 'sans-serif'],
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};
