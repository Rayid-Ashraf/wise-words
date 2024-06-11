/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "concrete": '#F1F1F1',
        'emerald': '#04C46A',
        "dark-gray": '#353F4A',
      }
    },
  },
  plugins: [],
}