const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: {
		common: "./src/assets/js/common.js",
		index: "./src/assets/js/index.js",
		"campus-map": "./src/assets/js/campus-map.js",
		stall: "./src/assets/js/stall.js",
		"stall-individual": "./src/assets/js/stall-individual.js",
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
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: "assets/css/style-hamburger-menu.css" }),
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
	],
};
