const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports=()=>({
	mode:"development",
	devtool: "eval-source-map",
	devServer : {
		port:9000,
		compress: true,
		serveIndex: true,
	},
	resolve : {
		modules: [path.resolve(__dirname,"src"),"node_modules"]
	},
	module:{
		rules : [
			{
				test:/\.(js|jsx)$/,
				exclude : /node_modules/,
				use:{
				  loader: "babel-loader"
				}
			}, {
				test: /\.(css)$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
	]
});

