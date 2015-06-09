C = require("../lib/constants")
prettyNum = require("../util/prettyNum")

var style = {
  container: {
    backgroundColor: '#151515',
    lineHeight: '1.5em',
    textAlign:  'center'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxSizing: 'border-box'
  },
  description: {
    fontStyle:     'italic',
    lineHeight:    '1.2em',
    marginTop:     '.5em',
    fontSize:      '.9em',
    maxWidth:      '500px',
    margin:        'auto',
    wordSpacing:   '.2em',
    letterSpacing: '0.05em'
  }
}

class MetaComponent extends React.Component {

  render() {
    return <div style={_.extend({}, style.container, this.props.style)}>
      <div style={{fontSize: '1.5em', color: C.COLORS.DIM}}>{this.props.name} Channel</div>
      <div style={{fontSize: '1em', color: C.COLORS.DIM}}>Created By: <a style={style.link} href={this.props.creator_url}>{this.props.creator_display_name}</a> in {moment(this.props.created_on).format('YYYY')}</div>
      <div><a style={style.link} href={this.props.rss}><i className='fa fa-rss'></i> {this.props.name}</a></div>
      <div>
        <a style={style.link} href={this._videosLink()}> {prettyNum(this.props.total_videos)} Videos</a>
        <a style={_.extend({}, style.link, {padding: '0 1em'})} href={this._followersLink()}> {prettyNum(this.props.total_subscribers)} Followers</a>
      </div>
      <div style={_.extend({}, style.description, {color: C.COLORS.DIM})}>{this.props.description}</div>
    </div>
  }

  _followersLink() {
    return this.props.url+'/followers'
  }

  _videosLink() {
    return this.props.url+'/videos'
  }
}

MetaComponent.propTypes = _.extend({}, C.INFO_PROPS, {
  style: React.PropTypes.object
})

MetaComponent.defaultProps = {
  style: {}
}
module.exports = MetaComponent
