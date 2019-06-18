const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
onst TerserPlugin = require('terser-webpack-plugin');
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
		}),
	]
});
