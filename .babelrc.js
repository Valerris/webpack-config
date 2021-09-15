const { PATHS } = require("./core/utils")

const presets = [
	[
		"@babel/preset-env",
		{
			modules: process.env.NODE_ENV === "test" ? "commonjs" : false,
			corejs: 3.16,
			useBuiltIns: "usage",
			configPath: PATHS.configPckgRoot,
		},
	],
	[
		"@babel/preset-react",
		{
			runtime: "automatic",
			importSource: "@emotion/react",
		},
	],
]

const plugins = [
	"babel-plugin-transform-imports",
	...(process.env.NODE_ENV === "production"
		? ["@babel/plugin-transform-runtime"]
		: ["@emotion"]),
]

process.env.STUB_API &&
	process.env.NODE_ENV === "development" &&
	plugins.push("react-refresh/babel")

module.exports = {
	presets,
	plugins,
}
