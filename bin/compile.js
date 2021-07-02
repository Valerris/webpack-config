#!/usr/bin/env node

const webpack = require("webpack")
const config = require("../webpack.config")

webpack(config, (err, stats) => {
	if (err) {
		console.error(err)
		return
	} else {
		console.log(
			`\nCompilation output:\n${stats.toString({
				chunks: false,
				colors: true,
			})}`
		)
	}
})
