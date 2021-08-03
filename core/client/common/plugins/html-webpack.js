const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { PATHS, isProdMode } = require("../../../utils")

module.exports = new HtmlWebpackPlugin({
	template: path.resolve(PATHS.srcPublic, "index.html"),
	filename: PATHS.devIndex,
	minify: isProdMode(),
})
