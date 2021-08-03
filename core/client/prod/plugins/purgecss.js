const glob = require("glob")
const PurgeCssPlugin = require("purgecss-webpack-plugin")
const { PATHS } = require("../../../utils")

const FILES = glob.sync(`${PATHS.src}/*.(s?[ac]ss)`, {
	nodir: true,
})

module.exports = new PurgeCssPlugin({
	paths: FILES,
	only: ["src"],
	extractors: [
		{
			extractor: (content) =>
				content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
			extensions: ["html"],
		},
	],
})
