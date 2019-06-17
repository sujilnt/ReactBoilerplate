const merge = require("webpack-merge");
const path = require('path');
const webpack = require('webpack');
const modeConfig = env => require(`./webpack/webpack.${env}.js`)(env);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin');
module.exports=({mode,presets}={mode: "development", presets:[]})=>{
return merge({
	mode,
	entry:"./index.js",
	output:{
		filename: "./main.js",
	},
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve('./index.html') ,  jsExtension: '.gz' }),
		new webpack.ProgressPlugin(),
		new CompressionPlugin({
			test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
			deleteOriginalAssets: true,
		}),
		new HtmlWebpackChangeAssetsExtensionPlugin()
	]
},modeConfig(mode));
};
