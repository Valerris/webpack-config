const MODE = require("./mode")

module.exports = function () {
	return MODE !== "development"
}
