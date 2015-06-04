global.React  = require("react")
global.Bacon  = require("baconjs")
global.moment = require("moment")
global._      = require("underscore")

var RootComponent = require("./rootComponent")
const SEEDS       = require("./seeds")

class Controller {
  constructor() {
    this.stream = Bacon.Bus()
    this.render()
  }

  render() {
    React.render(<RootComponent {...SEEDS.STAFF_INFO} videos={SEEDS.BD_VIDEOS} />, document.body)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  global.App = new Controller()
});
