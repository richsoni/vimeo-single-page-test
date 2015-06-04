const SEEDS       = require("./seeds")
class Controller {
  constructor() {
    this.eventStream   = new Bacon.Bus()
    this.info          = SEEDS.STAFF_INFO
    this.RootComponent = null
  }

  render() {
    if (this.RootComponent) {
      React.render(<this.RootComponent {...this.info} />, document.body)
    }
  }

}

module.exports = new Controller()
