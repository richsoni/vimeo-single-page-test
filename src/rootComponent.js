var infoStore        = require("./infoStore")
var ChannelComponent = require("./channelComponent")

var style = {
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
    if(info.id){
      return <ChannelComponent {...info} />
    } else {
      return <div style={style.fullPageLoad}>
        <div >
          <i className='fa fa-spinner fa-spin'></i>
        </div>
      </div>
    }
  }
}
module.exports = RootComponent
