var stream = global.App.eventStream = new Bacon.Bus()
stream.util = {
  actionIs: (action) => {
    return (stream) => {
      return stream.action === action
    }
  },
  payload: (stream) => {
    return stream.payload
  },
}
module.exports = stream
