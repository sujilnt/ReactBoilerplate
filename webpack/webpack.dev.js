const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports=()=>({
	mode:"development",
	devtool: "eval-source-map",
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
			}
		]
	}
	
});

