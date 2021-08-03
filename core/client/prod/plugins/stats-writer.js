const { StatsWriterPlugin } = require("webpack-stats-plugin")

module.exports = new StatsWriterPlugin({
	stats: {
		all: false,
		assets: true,
	},
})
