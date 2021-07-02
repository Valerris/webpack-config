const webpack = require("webpack")
const MiniCssExtractPlugin = require("./mini-css-extract")
const CompressionPlugin = require("./compression")
const StatsWriterPlugin = require("./stats-writer")
const PurgeCssPlugin = require("./purgecss")

module.exports = [
	CompressionPlugin,
	MiniCssExtractPlugin,
	StatsWriterPlugin,
	PurgeCssPlugin,
	new webpack.optimize.ModuleConcatenationPlugin(),
	new webpack.DefinePlugin({
		"process.env.NODE_ENV": JSON.stringify("production"),
	}),
]
