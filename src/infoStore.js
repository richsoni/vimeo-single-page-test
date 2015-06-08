var reqwest     = require('reqwest');
var eventStream = require("./eventStream")

var data = new Immutable.Map()

var buildUrl = (channel) => {
  return `https://vimeo.com/api/v2/channel/${channel}/info.json`
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
    return new Immutable.Map(response)
  })

responses.onValue((map) => { data = map })
responses.onValue((map) => {
  eventStream.push({action: C.ACTIONS.INFO.CHANGE, payload: data})
})

class InfoStore {
  toJS(){ return data.toJS() }
}

module.exports = new InfoStore()
