module.exports = {
	content: ["./src/**/*.{html,js}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#F63E7B",
					secondary: "#FFF8F5",
					success: "#e2fcf2",
					accent: "#F4F7FC",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
