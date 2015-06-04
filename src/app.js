global.React  = require("react")
global.moment = require("moment")
global._      = require("underscore")

var RootComponent = require("./rootComponent")
const SEEDS       = require("./seeds")

class Controller {
  constructor() {
    stream = Bacon.Bus()
  }
}

var render = () => {
  React.render(<RootComponent {...SEEDS.STAFF_INFO} videos={SEEDS.BD_VIDEOS} />, document.body)
}

document.addEventListener("DOMContentLoaded", render);
