/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			blue: '#38bdf8',
			white: '#FFFFFF',
			darkwhite: '#f9fafb',
			darkwhite2: '#f3f4f6',
			darkwhite3: '#e5e7eb',
			gray: '#808080',
			black: '#000000',
			mauve: '#C092B2',
			'pearly purple': '#AD6EA1',
		},

		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
