const { merge } = require("webpack-merge")
const { PATHS } = require("../../../utils")
const commonConfig = require("../common/webpack.config")
const target = require("./target")
const plugins = require("./plugins")
const optimization = require("./optimization")
const performance = require("./performance")

module.exports = merge(commonConfig, {
	target,
	mode: "production",
	output: {
		filename: "[name].[contenthash:5].chunk.js",
		assetModuleFilename: `${PATHS.assetsGeneratorFilenameDir}[name].[contenthash:5][ext][query]`,
	},
	plugins,
	optimization,
	performance,
})
