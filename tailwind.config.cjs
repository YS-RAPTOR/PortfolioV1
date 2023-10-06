/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: { Background: "#000309", Primary: "#001F54" },
			transitionDelay: { 0: "0ms" },
			screens: {
				bar: "950px",
				xs: "400px",
				"3xl": "2800px",
				smh: { raw: "(max-height: 639px)" },
			},
			spacing: {
				vhw: "calc(100vh - 76px)", // 76px is the height of the navbar
				vhwf: "calc(100vh - 9.25rem)", // 9.25 is the footer
				vhwfn: "calc(100vh - 76px - 9.25rem)", // 9.25 is the footer
			},
			minHeight: {
				vhw: "calc(100vh - 76px)", // 76px is the height of the navbar
				vhwf: "calc(100vh - 9.25rem)", // 9.25 is the footer
				vhwfn: "calc(100vh - 76px - 9.25rem)", // 9.25 is the footer
			},
			keyframes: {
				rubberBand: {
					"0%": { transform: "scale3d(1, 1, 1)" },
					"30%": { transform: "scale3d(1.25, 0.75, 1)" },
					"40%": { transform: "scale3d(0.75, 1.25, 1)" },
					"50%": { transform: "scale3d(1.15, 0.85, 1)" },
					"65%": { transform: "scale3d(0.95, 1.05, 1)" },
					"75%": { transform: "scale3d(1.05, 0.95, 1)" },
					"100%": { transform: "scale3d(1, 1, 1)" },
				},
			},
			animation: {
				rubberBand: "rubberBand 1s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
