global.React  = require("react")
global.Bacon  = require("baconjs")
global.moment = require("moment")
global._      = require("underscore")

var RootComponent = require("./rootComponent")
const SEEDS       = require("./seeds")

class Controller {
  constructor() {
    this.stream = Bacon.Bus()
    document.addEventListener("DOMContentLoaded", this.render);
  }

  render() {
    React.render(<RootComponent {...SEEDS.STAFF_INFO} videos={SEEDS.BD_VIDEOS} />, document.body)
  }
}

global.App = new Controller()
