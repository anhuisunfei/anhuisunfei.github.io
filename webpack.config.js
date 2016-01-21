var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
	entry: './app/index.jsx',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			warnings: false
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		preLoaders: [{
			test: /\.(js|jsx)$/,
			loader: 'eslint-loader',
			include: [path.resolve(__dirname, "./app")],
			exclude: [nodeModulesPath]
		}, ],
		loaders: [{
			test: /\.(js|jsx)$/,  
			loaders: ['react-hot', 'babel'], 
			exclude: [nodeModulesPath]
		}]
	},
	eslint: {
		configFile: '.eslintrc' //Rules for eslint
	},
	devServer: {
		contentBase: '../anhuisunfei.github.io/', //Relative directory for base of server
		devtool: 'eval',
		hot: true, //Live-reload
		inline: true,
		port: 3000 //Port Number
	}
}