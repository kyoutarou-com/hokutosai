const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: {
		common: "./src/assets/js/common.js",
		index: "./src/assets/js/index.js",
		stall: "./src/assets/js/stall.js",
		"stall-individual": "./src/assets/js/stall-individual.js",
		stage: "./src/assets/js/stage.js",
		"stage-individual": "./src/assets/js/stage-individual.js",
		theme: "./src/assets/js/theme.js",
		vote: "./src/assets/js/vote.js",
		"vote-thanks": "./src/assets/js/vote-thanks.js",
		exhibition: "./src/assets/js/exhibition.js",
		"exhibition-individual": "./src/assets/js/exhibition-individual.js",
		where: "./src/assets/js/where.js",
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
