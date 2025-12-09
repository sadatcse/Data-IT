/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#cfcfcf',
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {

        'light': {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#0099ff", 
          "primary-focus": "#007acc", 
        },
      },
    ],
  },
};