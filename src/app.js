
global.React     = require("react")
global.Bacon     = require("baconjs")
global.moment    = require("moment")
global._         = require("underscore")
global.Immutable = require("immutable")
global.qs        = require("query-string")

var RootComponent = require("./rootComponent")
global.App = {}
var infoStore     = App.infoStore   = require("./infoStore")
var VideoStore    = App.videoStore  = require("./videoStore")
var eventStream   = App.eventStream = require("./eventStream")

var render       = () => { React.render(<RootComponent />, document.body) }
var parseChannel = () => {
  var hash = window.location.hash.replace('#!/', '')
  eventStream.push({action: C.ACTIONS.CHANNEL.CHANGE, payload: hash})
}

eventStream.onValue(render)
eventStream
  .filter((stream) => { return stream.action === C.ACTIONS.CHANNEL.UPDATE_HASH })
  .map((stream) => {return stream.payload})
  .map((channel) => { return  `#!/${channel}`})
  .log()
  .onValue((url) => {
    window.location.hash = url
  })

document.addEventListener("DOMContentLoaded", render)
document.addEventListener("DOMContentLoaded", parseChannel)
window.addEventListener('hashchange', parseChannel)
