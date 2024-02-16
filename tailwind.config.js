/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			fontFamily: {
				junicode: ['Junicode']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
