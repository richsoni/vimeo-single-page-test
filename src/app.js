
global.React     = require("react")
global.Bacon     = require("baconjs")
global.moment    = require("moment")
global._         = require("underscore")
global.Immutable = require("immutable")

var RootComponent = require("./rootComponent")
global.App = {}
var infoStore     = App.infoStore   = require("./infoStore")
var VideoStore    = App.videoStore  = require("./videoStore")
var eventStream   = App.eventStream = require("./eventStream")

eventStream.push({action: C.ACTIONS.CHANNEL.CHANGE, payload: 'staffpicks'})

var render = () => {
  React.render(<RootComponent />, document.body)
}

eventStream.onValue(render)
document.addEventListener("DOMContentLoaded", render)
