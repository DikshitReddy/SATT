/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        dark: "#1C160F",
        cream: "#FAF7F2",
        beige: "#F5EDE4",
      },
    },
  },
  plugins: [],
}