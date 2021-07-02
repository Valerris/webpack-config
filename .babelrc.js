const path = require("path")

module.exports = function (api) {
	api.cache.invalidate(() => process.env.NODE_ENV)

	const plugins = [
		"babel-plugin-transform-imports",
		"@babel/plugin-transform-runtime",
	]

	process.env.STUB_API &&
		api.env("development") &&
		plugins.push("react-refresh/babel")

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					modules: false,
					corejs: 3.15,
					useBuiltIns: "usage",
				},
			],
			[
				"@babel/preset-react",
				{
					runtime: "automatic",
				},
			],
		],
		plugins,
	}
}
