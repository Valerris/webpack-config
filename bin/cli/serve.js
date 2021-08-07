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
	.option("-p, --port [port]", "port", "8080")
	.parse(process.argv)

const { mode, port } = commander.opts()

process.env.NODE_ENV = mode

try {
	start(port)
} catch (err) {
	throw err
}
