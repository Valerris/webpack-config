const webpack = require("webpack")
const HtmlWebpackPlugin = require("./html-webpack")
const CircularDependencyPlugin = require("./circular-dependency")

module.exports = [
	HtmlWebpackPlugin,
	CircularDependencyPlugin,
	new webpack.DefinePlugin({
		"process.env.BUILD_TARGET": JSON.stringify("client"),
	}),
]
