var eventStream = require("../util/eventStream")
var C           = require("../lib/constants")

var data = new Immutable.Map()

var buildUrl = (channel) => {
  return `https://vimeo.com/api/v2/channel/${channel}/info.json`
}

var channel = eventStream
  .filter(eventStream.util.actionIs(C.ACTIONS.CHANNEL.CHANGE))
  .map(eventStream.util.payload)
  .toProperty()

var responses = channel
  .map(buildUrl)
  .flatMapLatest(eventStream.util.requestStream)
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
  eventStream.push({action: C.ACTIONS.ERROR.GLOBAL, payload: C.COPY.ERROR.NO_CHANNEL})
})

class InfoStore {
  toJS(){ return data.toJS() }
}

module.exports = global.App.infoStore = new InfoStore()
