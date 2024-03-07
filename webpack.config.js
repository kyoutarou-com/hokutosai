const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		common: "./src/js/common.js",
		index: "./src/js/index.js",
		"campus-map": "./src/js/campus-map.js",
	},
	output: {
		filename: "js/[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
				],
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
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: "css/style.css" }),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
