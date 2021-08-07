const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")
const config = require("../../webpack.config")

const compiler = webpack(config)
const options = { ...config.devServer }
const app = new webpackDevServer(compiler, options)

module.exports = async function start(PORT) {
	return app.listen(PORT, "localhost", () => {
		console.log(`Starting server on http://localhost:${PORT}`)
	})
}
