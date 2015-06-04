global.React     = require("react")
global.Bacon     = require("baconjs")
global.moment    = require("moment")
global._         = require("underscore")
global.Immutable = require("immutable")

global.App        = controller = require("./controller")
var RootComponent = require("./rootComponent")
var VideoStore    = require("./videoStore")

const SEEDS = require("./seeds")

controller.RootComponent = RootComponent
VideoStore.concat(SEEDS.BD_VIDEOS)

document.addEventListener("DOMContentLoaded", () => {
  controller.render()
});
