const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: {
		common: "./src/assets/js/common.js",
		index: "./src/assets/js/index.js",
		"campus-map": "./src/assets/js/campus-map.js",
		stall: "./src/assets/js/stall.js",
		"stall-individual": "./src/assets/js/stall-individual.js",
		stage: "./src/assets/js/stage.js",
		theme: "./src/assets/js/theme.js",
		vote: "./src/assets/js/vote.js",
	},
	output: {
		filename: "assets/js/[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
					{
						loader: "less-loader",
					},
				],
			},
		],
	},
	optimization: {
		minimizer: [`...`, new CssMinimizerPlugin()],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [new MiniCssExtractPlugin({ filename: "assets/css/style-hamburger-menu.css" })],
};
