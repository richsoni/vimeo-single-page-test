global.React     = require("react")
global.Bacon     = require("baconjs")
global.moment    = require("moment")
global._         = require("underscore")
global.Immutable = require("immutable")

var RootComponent = require("./rootComponent")
const SEEDS       = require("./seeds")

class VideoStore {
  constructor(data) {
    this.__data = new Immutable.List(data)
  }
}

class Controller {
  constructor() {
    this.stream     = Bacon.Bus()
    this.videoStore = new VideoStore(SEEDS.BD_VIDEOS)
    this.info       = SEEDS.STAFF_INFO
    this.render()
  }

  render() {
    React.render(<RootComponent {...this.info} videos={this.videoStore.__data} />, document.body)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  global.App = new Controller()
});
