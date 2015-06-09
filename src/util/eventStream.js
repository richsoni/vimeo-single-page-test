var reqwest = require('reqwest');
var stream  = global.App.eventStream = new Bacon.Bus()
stream.util = {
  actionIs: (action) => {
    return (stream) => {
      return stream.action === action
    }
  },
  payload: (stream) => {
    return stream.payload
  },
  requestStream: (url) => {
    return Bacon.fromPromise(
      reqwest({
        url: url,
        type: 'json',
        method: 'get',
        crossOrigin: true
    }))
  }
}
module.exports = stream
