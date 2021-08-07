const { getEnv } = require("../../../../utils")

module.exports = {
	index: [
		getEnv("STUB_API") &&
			"webpack-hot-middleware/client?path=/__webpack_hmr",
	].filter(Boolean),
}
