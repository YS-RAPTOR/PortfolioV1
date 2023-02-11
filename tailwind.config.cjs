/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: { Background: "#000309", Primary: "#001F54" },
			transitionDelay: { 0: "0ms" },
			screens: { bar: "850px" },
			spacing: {
				vhw: "calc(100vh - 76px)", // 76px is the height of the navbar
				WindowWithoutTitleBar: "calc(24rem - 1.5rem - 0.75rem)", // 1.5rem is the titleBar size, 0.75rem is the padding
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
