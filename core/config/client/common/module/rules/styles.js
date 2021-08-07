const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const { isProdMode } = require("../../../../../utils")

module.exports = {
	test: /\.s?[ac]ss$/i,
	use: [
		isProdMode()
			? {
					loader: MiniCssExtractPlugin.loader,
					options: {
						publicPath: "",
					},
			  }
			: "style-loader",
		{
			loader: "css-loader",
			options: {
				modules: true,
				importLoaders: 1,
			},
		},
		{
			loader: "postcss-loader",
			options: {
				postcssOptions: {
					config: path.resolve(
						__dirname,
						"../../../../../../postcss.config.js"
					),
				},
			},
		},
	],
	// include: /src/,
	// exclude: /node_modules/,
}
