#!/usr/bin/env node

const commander = require("commander")
const start = require("../../core/serve")
const { version = "1.0.0" } = require("../../package")

commander
	.version(version)
	.description("@valerris webpack serve server")
	.usage("vlrrs-serve [options]")
	.option(
		"-m, --mode [mode]",
		"mode",
		/^(development|production)$/,
		"development"
	)
	.parse(process.argv)

const { mode } = commander.opts()

process.env.NODE_ENV = mode

try {
	start()
} catch (err) {
	throw err
}
