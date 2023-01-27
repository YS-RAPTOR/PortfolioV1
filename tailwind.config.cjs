/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {'Background' : "#000309", "Primary" : "#001F54"},
            transitionDelay:{'0' : "0ms"},
            screens: {'bar': '850px'},
            spacing: {
                'ham': '7.5px',
                'hamCenter': '3.25rem',
                'bar': '100vh',
                    },
        },
	},
	plugins: [],
}
