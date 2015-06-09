var reqwest     = require('reqwest');
var eventStream = require("../util/eventStream")

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
  .filter(eventStream.util.actionIs(C.ACTIONS.CHANNEL.CHANGE))
  .map(eventStream.util.payload)
  .toProperty()

var responses = channel
  .map(buildUrl)
  .flatMapLatest(requestStream)
  .map((response) => {
    return new Immutable.Map(response)
  })

responses.onValue((map) => {
  data = map
  eventStream.push({action: C.ACTIONS.INFO.CHANGE, payload: data})
})
responses.onError((map) => {
  data = new Immutable.Map()
  eventStream.push({action: C.ACTIONS.INFO.CHANGE, payload: data})
})

class InfoStore {
  toJS(){ return data.toJS() }
}

module.exports = global.App.infoStore = new InfoStore()
