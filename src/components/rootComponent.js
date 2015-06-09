var infoStore        = require("../stores/infoStore")
var ChannelComponent = require("./channelComponent")
var ChannelInput = require("./channelInputComponent")

var style = {
  body: {
    maxWidth: 940,
    margin:   'auto'
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
