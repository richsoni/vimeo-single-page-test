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
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    />
  }
}

class Video extends React.Component {
  render() {
    return <div onClick={this._onClick.bind(this)} style={this._style()}>{this.props.title}</div>
  }

  _onClick() {
    controller.eventStream.push({action: C.ACTIONS.VIDEO.ACTIVE, payload: this.props.id})
  }

  _style() {
    var result = {}
    if (this.props.active){ result.color = 'red'; }
    return result;
  }
}
Video.propTypes = {
  active:                   React.PropTypes.bool,
  id:                       React.PropTypes.number,
  title:                    React.PropTypes.string,
  description:              React.PropTypes.string,
  url:                      React.PropTypes.string,
  upload_date:              React.PropTypes.string,
  mobile_url:               React.PropTypes.string,
  thumbnail_small:          React.PropTypes.string,
  thumbnail_medium:         React.PropTypes.string,
  thumbnail_large:          React.PropTypes.string,
  user_id:                  React.PropTypes.number,
  user_name:                React.PropTypes.string,
  user_url:                 React.PropTypes.string,
  user_portrait_small:      React.PropTypes.string,
  user_portrait_medium:     React.PropTypes.string,
  user_portrait_large:      React.PropTypes.string,
  user_portrait_huge:       React.PropTypes.string,
  stats_number_of_likes:    React.PropTypes.number,
  stats_number_of_plays:    React.PropTypes.number,
  stats_number_of_comments: React.PropTypes.number,
  duration:                 React.PropTypes.number,
  width:                    React.PropTypes.number,
  height:                   React.PropTypes.number,
  tags:                     React.PropTypes.string,
  embed_privacy:            React.PropTypes.string
}

class Videos extends React.Component {

  constructor() {
    this.state = {
      videos: VideoStore.list(),
      currentIndex: 0
    }
    controller.eventStream.onValue((stream) => {
      if(stream.action === C.ACTIONS.VIDEO.ACTIVE){
        var index = this.state.videos.findIndex((video) => {return video.id === stream.payload})
        this.setState({currentIndex: index})
      }
    })
  }

  render() {
    return <div>
      <VideoView
        {...this.state.videos[this.state.currentIndex]}
      />
      Current Video = {this.state.videos[this.state.currentIndex].title}
      {this.state.videos.map((video, index) => {
        return <Video {...video} key={index} active={index === this.state.currentIndex} />
      })}
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
