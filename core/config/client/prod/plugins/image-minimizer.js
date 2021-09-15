const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")

module.exports = new ImageMinimizerPlugin({
	minimizerOptions: {
		plugins: [
			["gifsicle", { interlaced: true, optimizationLevel: 3 }],
			["mozjpeg", { progressive: true, quality: 60 }],
			["pngquant", { strip: true, quality: [0.3, 0.6] }],
			["svgo"],
		],
	},
})
