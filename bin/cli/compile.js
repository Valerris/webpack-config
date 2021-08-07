#!/usr/bin/env node

const commander = require("commander")
const webpack = require("webpack")
const { version = "1.0.0" } = require("../../package")

commander
	.version(version)
	.description("@valerris webpack config.")
	.usage("vlrrs-compile [options]")
	.option(
		"-m, --mode [mode]",
		"mode",
		/^(development|production)$/,
		"development"
	)
	.on("--help", () => {
		console.log(`
			\n
			Example:
			\n
			\tvlrrs-compile -m development
			\n
		`)
	})
	.parse(process.argv)

const options = commander.opts()

process.env.NODE_ENV = options.mode

const config = require("../../webpack.config")

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
