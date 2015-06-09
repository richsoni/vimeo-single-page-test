global.React     = require("react")
global.Bacon     = require("baconjs")
global.moment    = require("moment")
global._         = require("underscore")
global.Immutable = require("immutable")
global.qs        = require("query-string")
global.App = {}

var RootComponent = require("./components/rootComponent")
var eventStream   = require("./util/eventStream")

/* RENDER APP WIRING */
var render       = () => { React.render(<RootComponent />, document.body) }
eventStream.onValue(render)
document.addEventListener("DOMContentLoaded", render)


/* BARBARIC ROUTING */
eventStream
  .filter(eventStream.util.actionIs(C.ACTIONS.CHANNEL.UPDATE_HASH))
  .map(eventStream.util.payload)
  .map((channel) => { return  `#!/${channel}`})
  .onValue((url) => {
    window.location.hash = url
  })

var parseChannel = () => {
  var hash = window.location.hash.replace('#!/', '')
  eventStream.push({action: C.ACTIONS.CHANNEL.CHANGE, payload: hash})
}

document.addEventListener("DOMContentLoaded", parseChannel)
window.addEventListener('hashchange', parseChannel)
