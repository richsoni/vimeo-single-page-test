require('array.prototype.findindex')
var Marquee     = require("./marqueeComponent")
var Video       = require("./videoComponent")
var C           = require("../lib/constants")
var eventStream = require("../util/eventStream")
var globalStyle = require("../lib/style")

var style = {
  videosWrap: {
    padding:        0,
    margin:         0,
    listStyle:      'none',
    justifyContent: 'space-around'
  },
}
style.videosWrap = _.extend({}, style.videosWrap, globalStyle.displayFlex, globalStyle.flexFlowRowWrap)

class VideoView extends React.Component {
  render() {
    return <iframe
      src={"//player.vimeo.com/video/"+this.props.id+"?portrait=0"}
      width='100%'
      height={400}
      frameBorder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
    />
  }
}

class Videos extends React.Component {

  constructor() {
    this.state = {
      videos: [],
      currentVideo: null,
      hoverVideo:   null,
    }

    this.streamSubscriptions = [
      eventStream
        .filter(eventStream.util.actionIs(C.ACTIONS.VIDEO.PLAY))
        .map(eventStream.util.payload)
        .onValue((payload) => { this.setState({currentVideo: payload})}),

      eventStream
        .filter(eventStream.util.actionIs(C.ACTIONS.MARQUEE.LOAD))
        .map(eventStream.util.payload)
        .onValue((payload) => { this.setState({hoverVideo: payload})}),

      eventStream
        .filter(eventStream.util.actionIs(C.ACTIONS.MARQUEE.CLEAR))
        .onValue(this._resetHover.bind(this)),

      eventStream
        .filter(eventStream.util.actionIs(C.ACTIONS.VIDEOS.CHANGE))
        .map(eventStream.util.payload)
        .onValue((list) => {
            this.setState({
              videos: list,
              currentVideo: list.length ? list[0] : null,
            })
        }),
    ]
  }


  render() {
    var marqueeVideo = this.state.hoverVideo || this.state.currentVideo
    return <div>
      <VideoView
        {...this.state.currentVideo}
      />
      <Marquee {...marqueeVideo} active={marqueeVideo === this.state.currentVideo} />
      <ul style={style.videosWrap}>
        {this.state.videos.map((video, index) => {
          return <Video {...video} key={index} video={video} active={video === this.state.currentVideo} />
        })}
      </ul>
      {this._moreButton()}
    </div>
  }

  componentWillUnmount() {
    this.streamSubscriptions.map((unsubscribe) =>{ unsubscribe() })
  }

  _moreButton() {
    if (this.props.total > this.state.videos.length && C.TOTAL_ITEMS >= this.state.videos.length){
      return <a
        onClick={this._moreVideos.bind(this)}
      >
        More Videos
      </a>
    } else {
      return <div />
    }
  }

  _moreVideos() {
    eventStream.push({action: C.ACTIONS.VIDEOS.MORE, payload: null})
  }
  _resetHover() {
    var cached = this.state.hoverVideo
    setTimeout(() => {
      if (cached === this.state.hoverVideo){
        this.setState({hoverVideo: null})
      }
    }, 150)
  }
}

Videos.propTypes = {
  videos: React.PropTypes.array,
  style:  React.PropTypes.object
}
Videos.defaultProps = {
  videos: [],
  style:  {}
}
module.exports = Videos
