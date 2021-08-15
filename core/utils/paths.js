const path = require("path")
const isProdMode = require("./isProdMode")

const configPckgRoot = path.join(__dirname, "../..")
const root = path.normalize(process.cwd())
const api = path.join(root, "stub")
const src = path.join(root, "src")
const build = path.join(root, isProdMode() ? "build" : "build-dev")
const srcPublic = path.join(configPckgRoot, "public")
const buildPublic = path.join(build, "public")
// const buildAssets = path.join(buildPublic, "assets")
const devIndex = "public/index.html"
const absoluteIndex = path.join(buildPublic, "index.html")
const assetsGeneratorFilenameDir = "public/assets/"

module.exports = {
	configPckgRoot,
	root,
	api,
	src,
	build,
	srcPublic,
	buildPublic,
	// buildAssets,
	devIndex,
	absoluteIndex,
	assetsGeneratorFilenameDir,
}
