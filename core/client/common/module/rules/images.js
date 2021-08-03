const { isProdMode } = require("../../../../utils")

module.exports = {
	test: /\.(png|svg|jpg|jpeg|gif)$/i,
	type: "asset/resource",
	// generator: {
	// 	filename: "public/assets/images/[name][ext]",
	// },
}
