export default {
	mode: "spa",
	target: "static",
	components: true,
	buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
	head: {
		title: "Nuxtjs Tailwindcss",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "Nuxtjs and Tailwindcss configuration minimal",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
	},
};
