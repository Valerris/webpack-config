const webpack = require("webpack")
const HtmlWebpackPlugin = require("./html-webpack")

module.exports = [
	HtmlWebpackPlugin,
	new webpack.DefinePlugin({
		"process.env.BUILD_TARGET": JSON.stringify("client"),
	}),
]
