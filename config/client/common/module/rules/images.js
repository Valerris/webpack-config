const { isProdMode } = require("../../../../utils")

module.exports = {
	test: /\.(png|svg|jpg|jpeg|gif)$/i,
	type: "asset/resource",
	...(isProdMode() && { use: "image-webpack-loader" }),
	// generator: {
	// 	filename: "public/assets/images/[name][ext]",
	// },
}
