const webpack = require("webpack")
const MiniCssExtractPlugin = require("./mini-css-extract")
const CompressionPlugin = require("./compression")
const StatsWriterPlugin = require("./stats-writer")
const PurgeCssPlugin = require("./purgecss")
const ImageMinimizerPlugin = require("./image-minimizer")

module.exports = [
	CompressionPlugin,
	MiniCssExtractPlugin,
	ImageMinimizerPlugin,
	StatsWriterPlugin,
	PurgeCssPlugin,
	new webpack.optimize.ModuleConcatenationPlugin(),
	new webpack.DefinePlugin({
		"process.env.NODE_ENV": JSON.stringify("production"),
	}),
]
