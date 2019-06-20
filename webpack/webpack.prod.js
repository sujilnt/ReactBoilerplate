const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports=()=>({
	mode: "production",
	output : {
		filename : "[chunkhash].js"
	},
	resolve : {
		modules: [path.resolve(__dirname,"src"),"node_modules"]
	},
	module:{
		rules : [
			{
				test:/\.(js|jsx)$/,
				exclude : [/node_modules/,/webpack/],
				use:{
					loader: "babel-loader"
				}
			},{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
			},{
				test: /\.(png|jpg|gif|jpe?g|svg|webp)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5000,
							outputPath: 'assets/images',
						},
					},
					{
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
							svgo : {
								removeViewBox : false
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
							limit: 5000,
							outputPath: 'assets/images',
						}
					}
				]
			}
		],
		
	},
	optimization: {
		minimize: true,
		mangleWasmImports: true,
		removeEmptyChunks:true,
		mergeDuplicateChunks: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {},
					mangle: true, // Note `mangle.properties` is `false` by default.
					module: false,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false,
					cache: true,
					parallel: true,
				}
			}),
			new OptimizeCSSAssetsPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css',
			})
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename:  '[name].[hash].css',
			chunkFilename: '[id].[hash].css'
		})
	]
});
