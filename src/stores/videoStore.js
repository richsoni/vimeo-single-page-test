var eventStream = require("../util/eventStream")
var C           = require("../lib/constants")

var data = new Immutable.List()
var page = 2
var url = ''

//helper functions
var updateList = (list) => { data = data.concat(list)}
var newList = (list) => { data = new Immutable.List(list) }

var buildUrl = (channel) => {
  return `https://vimeo.com/api/v2/channel/${channel}/videos.json`
}

var triggerChange = (list) => {
  eventStream.push({action: C.ACTIONS.VIDEOS.CHANGE, payload: data.toArray()})
}

var addPage = () => {
  return `${url}?page=${page}`
}

//properties
var channelStream = eventStream
  .filter(eventStream.util.actionIs(C.ACTIONS.CHANNEL.CHANGE))
  .map(eventStream.util.payload)
  .map(buildUrl)

// ajax stream
var responseStream = channelStream
  .flatMapLatest(eventStream.util.requestStream)

var moreStream = eventStream
  .filter(eventStream.util.actionIs(C.ACTIONS.VIDEOS.MORE))
  .map(addPage)
  .flatMapLatest(eventStream.util.requestStream)

//events
responseStream.onValue(newList)
responseStream.onValue(triggerChange)
moreStream.onValue(() => { page = page + 1 })
moreStream.onValue(updateList)
moreStream.onValue(triggerChange)
channelStream.onValue((value) => {url =  value})
channelStream.map([]).onValue(newList)
channelStream.map([]).onValue(triggerChange)

module.exports = global.App.videoStore  = data
