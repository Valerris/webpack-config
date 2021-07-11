const { PATHS } = require("../../../utils")

module.exports = {
	contentBase: PATHS.buildPublic,
	index: PATHS.devIndex,
	port: 8080,
	compress: true,
	historyApiFallback: {
		index: PATHS.devIndex,
	},
	hot: true,
	liveReload: false,
	open: true,
	stats: "minimal",
}
