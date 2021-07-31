#!/usr/bin/env node

const webpack = require("webpack")
const config = require("../webpack.config")

webpack(config, (err, stats) => {
	if (err) {
		throw err
	}

	console.log(
		`\nCompilation output:\n${stats.toString({
			chunks: false,
			colors: true,
		})}`
	)
})
