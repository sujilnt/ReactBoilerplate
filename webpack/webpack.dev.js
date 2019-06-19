const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminSvgo = require('imagemin-svgo');

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
			}, {
				test: /\.(png|jpg|gif|jpe?g|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5000,
							outputPath: './assets',
						}
					}
				]
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new ImageminPlugin({
			pngquant: ({quality: [0.5, 0.5]}),
			cacheFolder: path.resolve('./CacheAssets'),
			plugins: [
				imageminMozjpeg({
					quality: 50,
					progressive: true
				}),
			    imageminSvgo({
				    plugins: [{
				    	removeViewBox: false
				    }]
			    })
			]
		}),
	]
});

