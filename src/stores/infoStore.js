var eventStream = require("../util/eventStream")
var C           = require("../lib/constants")

var data = new Immutable.Map()

//helper functions

var buildUrl = (channel) => {
  return `https://vimeo.com/api/v2/channel/${channel}/info.json`
}

var triggerChange = (map) => {
  eventStream.push({action: C.ACTIONS.INFO.CHANGE, payload: map})
}

var newInfo   = (map) => { data = map }
var flushInfo = (map) => {
  data = new Immutable.Map()
  eventStream.push({action: C.ACTIONS.INFO.CHANGE, payload: data})
}
var triggerError = () => {
  eventStream.push({action: C.ACTIONS.ERROR.GLOBAL, payload: C.COPY.ERROR.NO_CHANNEL})
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
    return new Immutable.Map(response)
  })

//events
responses.onValue(newInfo)
responses.onValue(triggerChange)
responses.onError(flushInfo)
responses.onError(triggerError)

//public API
class InfoStore {
  toJS(){ return data.toJS() }
}

module.exports = global.App.infoStore = new InfoStore()
