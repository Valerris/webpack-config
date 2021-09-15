const webpack = require("webpack")
const ReactRefreshPlugin = require("./react-refresh")
const TimeFixPlugin = require("./time-fix")

module.exports = [
	new webpack.DefinePlugin({
		"process.env.NODE_ENV": JSON.stringify("development"),
	}),
	// new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	ReactRefreshPlugin,
	TimeFixPlugin,
]
