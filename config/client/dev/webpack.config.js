const { merge } = require("webpack-merge")

const commonConfig = require("../common/webpack.config")
const { getEnv } = require("../../utils")

const entry = require("./entry")
const plugins = require("./plugins")
const devServer = require("./devServer")
const devtool = require("./devtool")

module.exports = merge(commonConfig, {
	mode: "development",
	entry,
	plugins,
	devtool,
	devServer,
})
