/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				my: {
					black: "#110003",
					red: "#AD021B",
					yellow: "#FBFF39",
					orange: "#E85033",
					white: "#F5EFE6",
					blue: "#146EBE",
				},
			},
		},
	},
	plugins: [],
};
