var infoStore        = require("../stores/infoStore")
var eventStream      = require("../util/eventStream")
var constants        = require("../lib/constants")
var ChannelComponent = require("./channelComponent")
var ChannelInput     = require("./channelInputComponent")

var style = {
  body: {
    maxWidth: 940,
    margin:   'auto'
  },
  error:{
    color: 'red',
    width: '100%',
    textAlign: 'center',
  }
}

class RootComponent extends React.Component {
  constructor() {
    this.state = {
      error:  null,
      info:   {},
    }
    eventStream
      .filter(eventStream.util.actionIs(C.ACTIONS.ERROR.GLOBAL))
      .map(eventStream.util.payload)
      .onValue((error) => {
        this.setState({error: error})
      })
    eventStream
      .filter(eventStream.util.actionIs(C.ACTIONS.INFO.CHANGE))
      .map(eventStream.util.payload)
      .onValue((info) => {
        this.setState({info: info})
      })
  }

  render() {
    if (this.state.info.id){
      var channelComponent = <ChannelComponent {...this.state.info} />
    } else {
      var channelComponent = <div style={style.error}>{this.state.error}</div>
    }
    return <div style={style.body}>
      <ChannelInput />
      {channelComponent}
    </div>
  }
}
module.exports = RootComponent
