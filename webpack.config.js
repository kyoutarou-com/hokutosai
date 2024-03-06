const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
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
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [new CleanWebpackPlugin()],
};
