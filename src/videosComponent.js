require('array.prototype.findindex')
var VideoStore  = require("./videoStore")
var Marquee     = require("./marqueeComponent")
var C           = require("./constants")
var eventStream = require("./eventStream")

var style = {
  video: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3
  },
  videosWrap: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: '-webkit-box',
    display: '-moz-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
    WebkitFlexFlow: 'row wrap',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
  },
}

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

class Video extends React.Component {
  constructor(){
    this.state = {hover: false}
  }

  render() {
    return <li
      onMouseOut={this._onMouseOut.bind(this)}
      onMouseOver={this._onMouseOver.bind(this)}
      onClick={this._onClick.bind(this)}
      style={this._style()}
    >
    </li>
  }

  _onMouseOut(){
    this.setState({hover: false})
    eventStream.push({action: C.ACTIONS.MARQUEE.CLEAR, payload: null})
  }

  _onMouseOver(){
    this.setState({hover: true})
    eventStream.push({action: C.ACTIONS.MARQUEE.LOAD, payload: this.props.video})
  }

  _onClick() {
    eventStream.push({action: C.ACTIONS.VIDEO.PLAY, payload: this.props.video})
  }

  _style() {
    var result = _.extend({}, style.video,{
      backgroundImage: `url(${this.props.thumbnail_small})`
    })
    if (this.state.hover && !this.props.active) { result.borderColor = 'white' }
    if (this.props.active){ result.borderColor = C.COLORS.BLUE; }
    return result;
  }
}
Video.propTypes = _.extend({}, C.VIDEO_PROPS, {
  active:                   React.PropTypes.bool
})

Video.propTypes = _.extend({}, C.VIDEO_PROPS, {})

class Videos extends React.Component {

  constructor() {
    var list = VideoStore.list()
    this.state = {
      videos: list,
      currentVideo: list[0],
      hoverVideo:   null
    }
    eventStream.onValue((stream) => {
      if(stream.action === C.ACTIONS.MARQUEE.CLEAR){
        var cached = this.state.hoverVideo
        setTimeout(() => {
          if (cached === this.state.hoverVideo){
            this.setState({hoverVideo: null})
          }
        }, 150)
      }
    })
    eventStream.onValue((stream) => {
      if(stream.action === C.ACTIONS.MARQUEE.LOAD){
        this.setState({hoverVideo: stream.payload})
      }
    })
    eventStream.onValue((stream) => {
      if(stream.action === C.ACTIONS.VIDEO.PLAY){
        this.setState({currentVideo: stream.payload})
      }
    })
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
          return <Video {...video} key={video.id} video={video} active={video === this.state.currentVideo} />
        })}
      </ul>
    </div>
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
