import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        light: {
          bg: '#fffffc', // Cambia este valor al color de fondo deseado para el modo oscuro
        },
        dark: {
          bg: '#03080E', // Cambia este valor al color de fondo deseado para el modo oscuro
        }
      },
    },
  },
  plugins: [daisyui]
};
