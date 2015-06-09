var reqwest     = require('reqwest');
var eventStream = require("../util/eventStream")
var data = new Immutable.List()
var buildUrl = (channel) => {
  return `https://vimeo.com/api/v2/channel/${channel}/videos.json`
}
var requestStream = (url) => {
  return Bacon.fromPromise(
    reqwest({
      url: url,
      type: 'json',
      method: 'get',
      crossOrigin: true
  }))
}

var channel = eventStream
  .filter(eventStream.util.actionIs(C.ACTIONS.CHANNEL.CHANGE))
  .map(eventStream.util.payload)
  .toProperty()

var responses = channel
  .map(buildUrl)
  .flatMapLatest(requestStream)
  .map((response) => {
    return new Immutable.List(response)
  })

responses.onValue((list) => { data = list })
responses.onValue((map) => {
  eventStream.push({action: C.ACTIONS.VIDEOS.CHANGE, payload: data})
})

class VideoStore {
  list(){ return data.toArray() }
}

module.exports = global.App.videoStore  = new VideoStore()
