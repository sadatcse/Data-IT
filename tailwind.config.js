/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // White & Light Shades
        white: "#FFFFFF",
        "gray-light": "#EFF0F6",

        // Light Blues
        "blue-soft": "#B1DAF8",
        "blue-soft-2": "#CAE9FF",

        // Bright Blues
        "blue-strong": "#330FEE",
        "blue-main": "#056FFD",

        // Navy / Dark Blues
        "navy-dark": "#14223D",
        "navy": "#1A356A",

        // Dark Gray / Black
        "gray-dark": "#25252B",
        black: "#000000",
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],

          /* You may assign primary/secondary using your palette */
          primary: "#056FFD",         // main blue
          "primary-focus": "#330FEE", // deeper blue

          secondary: "#B1DAF8",
          accent: "#CAE9FF",

          neutral: "#25252B",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};
