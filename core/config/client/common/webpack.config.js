const { PATHS, MODE } = require("../../../utils")
const entry = require("./entry")
const plugins = require("./plugins")
const moduleOpts = require("./module")
const resolve = require("./resolve")

module.exports = {
	target: "web",
	mode: MODE,
	context: PATHS.root,
	entry,
	output: {
		path: PATHS.build,
		filename: "[name].chunk.js",
		assetModuleFilename: `${PATHS.assetsGeneratorFilenameDir}[name][ext][query]`,
		publicPath: "/",
		clean: true,
		pathinfo: false,
	},
	plugins,
	module: moduleOpts,
	resolve,
	stats: { preset: "normal", errorDetails: true },
	experiments: {
		asset: true,
	},
}
