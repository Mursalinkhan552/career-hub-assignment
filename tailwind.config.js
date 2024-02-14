/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#0055ff",

        "secondary": "#00d688",

        "accent": "#00cf00",

        "neutral": "#11201f",

        "base-100": "#fffdff",

        "info": "#00b0cd",

        "success": "#67ec00",

        "warning": "#ffab4c",

        "error": "#ff517a",
      },
    },
  ],
  plugins: [require("daisyui")],
}

