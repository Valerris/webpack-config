const { PATHS } = require("../../../../utils")

module.exports = {
	modules: [PATHS.src, "node_modules"],
	preferRelative: false,
	extensions: [".js", ".jsx", ".json", ".wasm"],
}
