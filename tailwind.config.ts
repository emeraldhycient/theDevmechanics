import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				// For each break point i tend to try and trigger at least three example: xs, xg, xx.
				// Same with sm, sg, sx
				xs: "320px",
				sm: "480px",
				sg: "559px",
				mx: "639px",
				md: "768px",
				ls: "840px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1920px",
			},
			animation: {
				"scale-in-center":
					"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
				"scale-out-center":
					"scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
			},
			keyframes: {
				"scale-in-center": {
					"0%": {
						transform: "scale(0)",
						opacity: "1",
					},
					to: {
						transform: "scale(1)",
						opacity: "1",
					},
				},
				"scale-out-center": {
					"0%": {
						transform: "scale(1)",
						opacity: "1",
					},
					to: {
						transform: "scale(0)",
						opacity: "1",
					},
				},
			},
		},
		fontFamily: {
			gordita: ["Gordita", "sans-serif"],
		},
	},
	plugins: [],
};
export default config;
