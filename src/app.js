
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
  console.log(hash)
  eventStream.push({action: C.ACTIONS.CHANNEL.CHANGE, payload: hash})
}

eventStream.onValue(render)

document.addEventListener("DOMContentLoaded", render)
document.addEventListener("DOMContentLoaded", parseChannel)
window.addEventListener('hashchange', parseChannel)
