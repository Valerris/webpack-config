const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = new MiniCssExtractPlugin({
	filename: "public/styles/[name].[contenthash:5].css",
})
