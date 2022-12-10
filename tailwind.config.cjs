/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'apple': {
				'50': '#f5faf4',
				'100': '#ebf5ea',
				'200': '#cce6ca',
				'300': '#add7aa',
				'400': '#70ba6b',
				'500': '#329c2b',
				'600': '#2d8c27',
				'700': '#267520',
				'800': '#1e5e1a',
				'900': '#194c15'
			}
		},
	},
	plugins: [],
}
