/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#1E1E1E",
				secondary: "#FAFAFA",
			},
		},
	},
	plugins: [],
};
