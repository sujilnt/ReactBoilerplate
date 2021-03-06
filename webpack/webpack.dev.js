const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports=()=>({
	mode:"development",
	devtool: "eval-source-map",
	devServer : {
		port:9000,
		compress: true,
		serveIndex: true,
	},
	module:{
		rules : [
			{
				test:/\.(js|jsx)$/,
				exclude : [/node_modules/,/utils/],
				use:["babel-loader",{
					loader:"eslint-loader",
					options : {
						emitWarning: true
					}
				}]
			}, {
				test: /\.(css)$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader'],
			}, {
				test: /\.(png|jpg|gif|jpe?g|svg|webp)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5000,
							outputPath: './assets/images',
						}
					},{
						loader: "image-webpack-loader",
						options: {
							mozjpeg : {
								progressive : true,
								quality : 65
							},
							optipng : {
								enabled : false,
							},
							pngquant : {
								quality : "65-90",
								speed : 4
							},
							gifsicle : {
								interlaced : false,
							},
							webp : {
								quality : 75
							},
							svgo:{
								removeViewBox: false
							}
						}
					}
				]
			},{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							outputPath: './assets/fonts',
						}
					}
				]
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
	]
});

