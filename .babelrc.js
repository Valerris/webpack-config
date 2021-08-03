const plugins = [
	"babel-plugin-transform-imports",
	"@babel/plugin-transform-runtime",
]

process.env.NODE_ENV === "development" &&
	plugins.push("babel-plugin-styled-components")

process.env.STUB_API &&
	process.env.NODE_ENV === "development" &&
	plugins.push("react-refresh/babel")

module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				modules: process.env.NODE_ENV === "test" ? "commonjs" : false,
				corejs: 3.16,
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

// module.exports = function (api) {
// 	api.cache.invalidate(() => process.env.NODE_ENV)

// 	const plugins = [
// 		"babel-plugin-transform-imports",
// 		"@babel/plugin-transform-runtime",
// 	]

// 	process.env.STUB_API &&
// 		api.env("development") &&
// 		plugins.push("react-refresh/babel")

// 	return {
// 		presets: [
// 			[
// 				"@babel/preset-env",
// 				{
// 					modules: api.env("test") ? "commonjs" : false,
// 					corejs: 3.15,
// 					useBuiltIns: "usage",
// 				},
// 			],
// 			[
// 				"@babel/preset-react",
// 				{
// 					runtime: "automatic",
// 				},
// 			],
// 		],
// 		plugins,
// 	}
// }
