const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")
const config = require("../../webpack.config")

const compiler = webpack(config)
const options = { ...config.devServer }
const app = new webpackDevServer(options, compiler)

module.exports = async () => await app.start()
