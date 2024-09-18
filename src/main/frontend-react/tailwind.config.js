import themes from "daisyui/src/theming/themes.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisy: {
    themes:["light", "dark"],
    darkMode:"dark"
  },


}

