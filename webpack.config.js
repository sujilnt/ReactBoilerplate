const path = require('path'),
	webpack = require('webpack'),
	merge = require("webpack-merge"),
	HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const modeConfig = env => require(`./webpack/webpack.${env}.js`)(env);
module.exports=({mode,presets}={mode: "dev", presets:[]})=>{
return merge({
	mode,
	entry:"./index.js",
	output:{
		filename: "./main.js",
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin({
			dry:true,
			verbose:true,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve('./webpack/template.ejs') ,
			templateParameters:{
				title: "React BoilerPlate v3"  // name of the app
			},
			inject:true,
		})
	]
},modeConfig(mode));
};
