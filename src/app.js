global.React     = require("react")
global.Bacon     = require("baconjs")
global.moment    = require("moment")
global._         = require("underscore")
global.Immutable = require("immutable")

var RootComponent = require("./rootComponent")
const SEEDS       = require("./seeds")
var VideoStore    = require("./videoStore")
VideoStore.concat(SEEDS.BD_VIDEOS)

class Controller {
  constructor() {
    this.stream     = Bacon.Bus()
    this.info       = SEEDS.STAFF_INFO
    this.render()
  }

  render() {
    React.render(<RootComponent {...this.info} />, document.body)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  global.App = new Controller()
});
