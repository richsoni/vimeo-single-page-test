require('array.prototype.findindex')
var VideoStore = require("./videoStore")
var controller = require("./controller")
var C          = require("./constants")

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
  render() {
    return <div onClick={this._onClick.bind(this)} style={this._style()}></div>
  }

  _onClick() {
    controller.eventStream.push({action: C.ACTIONS.VIDEO.ACTIVE, payload: this.props.video})
  }

  _style() {
    var result = {
      width: 50,
      height: 50,
      backgroundColor: 'red',
      float: 'left',
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: 1
    }
    if (this.props.active){ result.borderColor = 'black'; }
    return result;
  }
}
Video.propTypes = _.extend({}, C.VIDEO_PROPS, {
  active:                   React.PropTypes.bool
})

class Videos extends React.Component {

  constructor() {
    var list = VideoStore.list()
    this.state = {
      videos: list,
      currentVideo: list[0]
    }
    controller.eventStream.onValue((stream) => {
      if(stream.action === C.ACTIONS.VIDEO.ACTIVE){
        this.setState({currentVideo: stream.payload})
      }
    })
  }

  render() {
    return <div>
      <VideoView
        {...this.state.currentVideo}
      />
      {this.state.videos.map((video, index) => {
        return <Video {...video} key={video.id} video={video} active={video === this.state.currentVideo} />
      })}
      Current Video = {this.state.currentVideo.title}
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
