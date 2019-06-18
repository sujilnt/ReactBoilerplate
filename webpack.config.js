const merge = require("webpack-merge");
const path = require('path');
const webpack = require('webpack');
const modeConfig = env => require(`./webpack/webpack.${env}.js`)(env);
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports=({mode,presets}={mode: "development", presets:[]})=>{
return merge({
	mode,
	entry:"./index.js",
	output:{
		filename: "./main.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./webpack/template.html') ,
			templateParameters:true,
			inject:true,
		}),
		new webpack.ProgressPlugin(),
	]
},modeConfig(mode));
};
