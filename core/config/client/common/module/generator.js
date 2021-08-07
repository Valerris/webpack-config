const { PATHS } = require("../../../utils")

module.exports = {
	// asset: {
	// 	publicPath: PATHS.buildAssets,
	// },
	"asset/resource": {
		filename: `${PATHS.assetsGeneratorFilenameDir}[name][ext]`,
	},
}
