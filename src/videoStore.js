var reqwest     = require('reqwest');
var eventStream = require("./eventStream")
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
  .filter((stream) => { return stream.action === C.ACTIONS.CHANNEL.CHANGE})
  .map((stream)    => { return stream.payload })
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

module.exports = new VideoStore()
