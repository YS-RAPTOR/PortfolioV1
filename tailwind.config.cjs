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
            keyframes: {
                rubberBand:{
                    '0%' : {transform: 'scale3d(1, 1, 1)'},
                    '30%' : {transform: 'scale3d(1.25, 0.75, 1)'},
                    '40%' : {transform: 'scale3d(0.75, 1.25, 1)'},
                    '50%' : {transform: 'scale3d(1.15, 0.85, 1)'},
                    '65%' : {transform: 'scale3d(0.95, 1.05, 1)'},
                    '75%' : {transform: 'scale3d(1.05, 0.95, 1)'},
                    '100%' : {transform: 'scale3d(1, 1, 1)'},
                },
                PopIn: {
                    '0%': {opacity : '0', transform: 'translate3d(1rem, 0, 0)'},
                    '100%' : {opacity : '1', transform: 'translate3d(0, 0, 0)'},
                }
            },
            animation: {
                'rubberBand': 'rubberBand 1s ease-in-out forwards',
                'PopIn': 'PopIn 1s ease-in-out forwards',
            }
        },
	},
	plugins: [],
}
