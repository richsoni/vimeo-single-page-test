global.React  = require("react")
global.Bacon  = require("baconjs")
global.moment = require("moment")
global._      = require("underscore")

var RootComponent = require("./rootComponent")
const SEEDS       = require("./seeds")

class Controller {
  constructor() {
    this.stream = Bacon.Bus()
    this.videos = SEEDS.BD_VIDEOS
    this.info   = SEEDS.STAFF_INFO
    this.render()
  }

  render() {
    React.render(<RootComponent {...this.info} videos={this.videos} />, document.body)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  global.App = new Controller()
});
