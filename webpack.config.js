const { MODE } = require("./config/utils")

let config = null

switch (MODE) {
	case "development":
		config = require("./config/client/dev/webpack.config")
		break
	case "production":
		config = require("./config/client/prod/webpack.config")
		break
	default:
		throw new Error("No matching configuration was found!")
}

module.exports = config
