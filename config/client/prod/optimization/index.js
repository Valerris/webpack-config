const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
	minimize: true,
	minimizer: [new CssMinimizerWebpackPlugin(), "..."],
	runtimeChunk: "single",
	moduleIds: "deterministic",
	splitChunks: {
		chunks: "all",
		cacheGroups: {
			vendors: {
				name: "vendors",
				test: /[\\/]node_modules[\\/]/,
				chunks: "all",
				enforce: true,
			},
			// styles: {
			// 	name: "styles",
			// 	test: /\.s?[ac]ss$/,
			// 	chunks: "all",
			// 	enforce: true,
			// },
		},
	},
}
