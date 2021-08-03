const { MODE } = require("./core/utils")

let config = null

switch (MODE) {
	case "development":
		config = require("./core/client/dev/webpack.config")
		break
	case "production":
		config = require("./core/client/prod/webpack.config")
		break
	default:
		throw new Error("No matching configuration was found!")
}

module.exports = config
