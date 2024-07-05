import daisyui from "daisyui";
import plugin from "tailwindcss/plugin";
import { light, dark } from "daisyui/src/theming/themes";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				"tt-hoves": ["TT Hoves", "sans-serif"],
			},
			colors: {
				"secondary-darker": "#A8AFC4",
				"custom-brown": "#E4DFDA",
				"custom-white": "#fffffc",
				"custom-gray": "#A8AFC4",
				black: "#03080E",
			},
			keyframes: {
				expand: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(35)" },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
			},
			animation: {
				expand: "expand 0.5s ease-in-out forwards",
			},
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					...light,
					primary: "#feb58b",
					secondary: "#d3dbf4",
					accent: "#bb3c43",
					neutral: "#e4dfda",
					"neutral-content": "#03080e",
					"base-100": "#fffffc",
					"base-content": "#03080E",
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
					...dark,
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
		daisyui,
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
