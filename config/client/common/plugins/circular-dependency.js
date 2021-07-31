const CircularDependencyPlugin = require("circular-dependency-plugin")

module.exports = new CircularDependencyPlugin({
	exclude: /node_modules/,
	include: /\.m?jsx?$/i,
	failOnError: false,
})
