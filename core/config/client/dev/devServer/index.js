const { PATHS } = require("../../../../utils")

module.exports = {
	static: {
		directory: PATHS.buildPublic,
		serveIndex: true,
	},
	client: {
		logging: "log",
		overlay: true,
		progress: false,
	},
	devMiddleware: {
		index: PATHS.devIndex,
		publicPath: "/",
	},
	onListening: function (devServer) {
		const port = devServer.server.address().port
		console.log("Listening on port:", port)
	},
	setupExitSignals: true,
	port: 8080,
	compress: true,
	historyApiFallback: {
		index: "/" + PATHS.devIndex,
	},
	hot: "only",
	liveReload: false,
	open: true,
}
