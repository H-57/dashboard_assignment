/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        'purple-rgba':"rgba(#694BDB)"
      }
    },
  },
  plugins: [],
}

