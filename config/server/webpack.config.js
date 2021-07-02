const webpack = require("webpack")
const path = require("path")
const nodeExternals = require("webpack-node-externals")

module.exports = {
	target: "node",
	mode: "production",
	entry: ["webpack/hot/poll?1000", "./stub/index"],
	output: {
		path: path.resolve(__dirname, "../../build/server"),
		filename: "server.js",
		library: {
			type: "umd",
			globalObject: "this",
		},
	},
	externals: [
		nodeExternals({ allowlist: ["webpack/hot/poll?1000"] }),
	],
	module: {
		rules: [
			{
				test: /\.s?(a|c)ss$/,
				use: "null-loader",
				include: /stub/,
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				use: "babel-loader",
				include: /stub/,
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.BUILD_TARGET": JSON.stringify("server"),
		}),
	],
}
