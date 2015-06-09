var eventStream = require("../util/eventStream")
var C           = require("../lib/constants")

var data = new Immutable.List()

//helper functions
var newList = (list) => { data = list }

var buildUrl = (channel) => {
  return `https://vimeo.com/api/v2/channel/${channel}/videos.json`
}

var triggerChange = (list) => {
  eventStream.push({action: C.ACTIONS.VIDEOS.CHANGE, payload: list})
}

//channel name stream
var channel = eventStream
  .filter(eventStream.util.actionIs(C.ACTIONS.CHANNEL.CHANGE))
  .map(eventStream.util.payload)
  .toProperty()

// ajax stream
var responses = channel
  .map(buildUrl)
  .flatMapLatest(eventStream.util.requestStream)
  .map((response) => {
    return new Immutable.List(response)
  })

//events
responses.onValue(newList)
responses.onValue(triggerChange)

//public API
class VideoStore {
  list(){ return data.toArray() }
}

module.exports = global.App.videoStore  = new VideoStore()
