import daisyui from "daisyui";

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "tt-hoves": ["TT Hoves", "sans-serif"],
      },
      backgroundImage: {
        "light-bg": "url('/public/backgroundImages/bg-img-light.png')",
        "dark-bg": "url('/public/backgroundImages/bg-img-dark.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#feb58b",
          secondary: "#d3dbf4",
          "secondary-darker": "#bec6e0",
          accent: "#bb3c43",
          neutral: "#e4dfda",
          "neutral-content": "#03080e",
          "base-100": "#fffffc",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#feb58b",
          secondary: "#d3dbf4",
          accent: "#bb3c43",
          neutral: "#12161c",
          "neutral-content": "#fffffc",
          "base-100": "#03080E",
          "base-content": "#fffffc",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          ".no-scrollbar": {
            "-ms-overflow-style": "none", // IE and Edge
            "scrollbar-width": "none", // Firefox
          },
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, and Opera
          },
        },
        ["responsive"]
      );
    }),
  ],
};
