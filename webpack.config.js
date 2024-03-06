const path = require("path");

module.exports = {
	mode: "production",
	entry: {
		index: "./js/index.js",
		map: "./js/campus-map.js",
	},
	output: {
		filename: "[name].min.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
