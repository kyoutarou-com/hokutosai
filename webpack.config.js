const path = require("path");

module.exports = {
	entry: "./js/index.js",
	output: {
		filename: "index.min.js",
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
