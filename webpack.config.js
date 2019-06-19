const merge = require("webpack-merge");
const path = require('path');
const webpack = require('webpack');
const modeConfig = env => require(`./webpack/webpack.${env}.js`)(env);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports=({mode,presets}={mode: "development", presets:[]})=>{
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
			template: path.resolve('./webpack/template.html') ,
			templateParameters:true,
			inject:true,
		}),
	]
},modeConfig(mode));
};
