const path = require("path")
const { PATHS } = require("../../../../utils")

module.exports = {
	test: /\.m?jsx?$/i,
	use: [
		{
			loader: "babel-loader",
			options: {
				cacheDirectory: true,
				configFile: path.resolve(
					__dirname,
					"../../../../../.babelrc.js"
				),
			},
		},
	],
	include: [PATHS.src],
	exclude: /node_modules/,
}
