infoStore = require("./infoStore")
class Controller {
  constructor() {
    this.eventStream   = new Bacon.Bus()
    this.RootComponent = null
  }

  render() {
    if (this.RootComponent) {
      React.render(<this.RootComponent {...infoStore.toJS()} />, document.body)
    }
  }

}

module.exports = new Controller()
