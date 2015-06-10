var C           = require("../lib/constants")
var eventStream = require("../util/eventStream")
var style = {
  video: {
    width:       50,
    height:      50,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3
  },
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
module.exports = Video
