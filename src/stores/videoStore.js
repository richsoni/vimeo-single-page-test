var eventStream = require("../util/eventStream")
var C           = require("../lib/constants")

var data = new Immutable.List()

//helper functions
var newList = (list) => { data = new Immutable.List(list) }

var buildUrl = (channel) => {
  return `https://vimeo.com/api/v2/channel/${channel}/videos.json`
}

var triggerChange = (list) => {
  eventStream.push({action: C.ACTIONS.VIDEOS.CHANGE, payload: list})
}

//properties
var channelProp = eventStream
  .filter(eventStream.util.actionIs(C.ACTIONS.CHANNEL.CHANGE))
  .map(eventStream.util.payload)
  .toProperty()

// ajax stream
var responseStream = channelProp
  .map(buildUrl)
  .flatMapLatest(eventStream.util.requestStream)

//events
responseStream.onValue(newList)
responseStream.onValue(triggerChange)
channelProp.map([]).onValue(newList)
channelProp.map([]).onValue(triggerChange)

module.exports = global.App.videoStore  = data
