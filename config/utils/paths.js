const path = require("path")
const isProdMode = require("./isProdMode")

const root = path.resolve(process.cwd())
const api = path.resolve(root, "stub")
const src = path.resolve(root, "src")
const build = path.resolve(root, isProdMode() ? "build" : "build-dev")
const srcPublic = path.resolve(root, "public")
const buildPublic = path.resolve(build, "public")
const buildAssets = path.resolve(buildPublic, "assets")
const devIndex = "public/index.html"
const absoluteIndex = path.resolve(buildPublic, "index.html")
const assetsGeneratorFilenameDir = "public/assets/"

module.exports = {
	root,
	api,
	src,
	build,
	srcPublic,
	buildPublic,
	buildAssets,
	devIndex,
	absoluteIndex,
	assetsGeneratorFilenameDir,
}
