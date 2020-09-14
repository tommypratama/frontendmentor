module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
		darkSelector: ".dark-mode",
		extend: {
			colors: {
				dark: {
					"100": "#8B97C6",
					"200": "#1F222E",
					"300": "#252A41",
					"400": "#1E202A",
				},
			},
			maxWidth: {
				"1/11": "80%",
			},
		},
	},
	variants: {
		backgroundColor: [
			"dark",
			"dark-hover",
			"dark-group-hover",
			"dark-even",
			"dark-odd",
		],
		borderColor: ["dark", "dark-focus", "dark-focus-within"],
		textColor: ["dark", "dark-hover", "dark-active"],
	},
	plugins: [require("tailwindcss-dark-mode")()],
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: [
			"components/**/*.vue",
			"layouts/**/*.vue",
			"pages/**/*.vue",
			"plugins/**/*.js",
			"nuxt.config.js",
		],
	},
};
