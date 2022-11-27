/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
				accent: ["Roboto Mono", "monospace"],
			},
			colors: {
				primary: "#1E1E1E",
				secondary: "#FAFAFA",
			},
			cursor: {
				drag: "url('../assets/cursor/cursor-drag.svg'), auto",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".no-scrollbar": {
					/* IE and Edge */
					"-ms-overflow-style": "none",

					/* Firefox */
					"scrollbar-width": "none",

					/* Safari and Chrome */
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},

				".rotate-flip-12": {
					transform: "rotateY(180deg) rotateZ(12deg)",
				},
				".-rotate-flip-12": {
					transform: "rotateY(180deg) rotateZ(-12deg)",
				},
			});
		}),
	],
};
