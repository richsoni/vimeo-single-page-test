global.React     = require("react")
global.Bacon     = require("baconjs")
global.moment    = require("moment")
global._         = require("underscore")
global.Immutable = require("immutable")

var RootComponent = require("./rootComponent")
var infoStore     = require("./infoStore")
var VideoStore    = require("./videoStore")

const SEEDS = require("./seeds")

VideoStore.concat(SEEDS.BD_VIDEOS)

document.addEventListener("DOMContentLoaded", () => {
  React.render(<RootComponent {...infoStore.toJS()} />, document.body)
});
