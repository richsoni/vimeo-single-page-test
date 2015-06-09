var infoStore        = require("./infoStore")
var ChannelComponent = require("./channelComponent")
var ChannelInput = require("./channelInputComponent")

var style = {
  body: {
    maxWidth: 940,
    margin: 'auto'
  },
  fullPageLoad: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    fontSize: '14vw'
  }
}

class RootComponent extends React.Component {
  render() {
    var info = infoStore.toJS()
    if (info.id){
      var channelComponent = <ChannelComponent {...info} />
    } else {
      var channelComponent = <div />
    }
    return <div style={style.body}>
      <ChannelInput />
      {channelComponent}
    </div>
  }
}
module.exports = RootComponent
