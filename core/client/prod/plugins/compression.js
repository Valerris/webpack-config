const CompressionPlugin = require("compression-webpack-plugin")
const zopfli = require("@gfx/zopfli")

module.exports = new CompressionPlugin({
	exclude: /.map$/,
	compressionOptions: {
		numiterations: 15,
	},
	algorithm: zopfli.gzip,
})
