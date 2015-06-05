C = require("./constants")
prettyNum = require("./prettyNum")

class Marquee extends React.Component {
  render() {
    var meta = <div style={{marginTop: 10}}>
          <span style={{color: C.COLORS.DIM}}> <i className='fa fa-play'></i> {prettyNum(this.props.stats_number_of_plays)}</span>
          <a style={{margin: '0 2em', fontWeight: 'bold', color: '#fff', textDecoration: 'none'}} href={this._likesURL()}>
            <i className='fa fa-heart'></i> {prettyNum(this.props.stats_number_of_likes)}
          </a>
          <span style={{color: C.COLORS.DIM}}>
            <i className='fa fa-comment'></i> {prettyNum(this.props.stats_number_of_comments)}
          </span>
        </div>
    if(this.props.active){
      return <div style={this._style()}>
        <a
          href={this.props.url}
          style={{color: C.COLORS.BLUE, fontWeight: 'bold'}}
        >
          {this.props.title}
        </a>
        {meta}
      </div>
    } else {
      return <div style={this._style()}>{this.props.title} {meta}</div>
    }
  }

  _likesURL() {
    return `https://vimeo.com/${this.props.id}/likes`
  }

  _style() {
    var result = {
      dislay: 'block',
      clear: 'both',
      width: '100%',
      minHeight: 20,
      textAlign: 'center',
      backgroundColor: '#000',
      color: '#fff',
      padding: 10
    }
    return result
  }
}
Marquee.propTypes = _.extend({}, C.VIDEO_PROPS, {
  active:                   React.PropTypes.bool
})

Marquee.propTypes = _.extend({}, C.VIDEO_PROPS, {})
module.exports = Marquee
