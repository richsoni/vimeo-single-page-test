C = require("./constants")

style = {
  link: {
    color: '#fff'
  }
}

class MetaComponent extends React.Component {

  render() {
    return <div style={this.props.style}>
      <div style={{fontSize: '2em'}}>Created By: <a style={style.link} href={this.props.creator_url}>{this.props.creator_display_name}</a> in {moment(this.props.created_on).format('YYYY')}</div>
      <div style={{fontStyle: 'italic'}}>{this.props.description}</div>
      <div><a style={style.link} href={this.props.rss}><i className='fa fa-rss'></i>{this.props.name}</a></div>
      <div><a style={style.link} href={this._videosLink}> {this.props.total_videos} Videos</a></div>
      <div><a style={style.link} href={this._followersLink}> {this.props.total_subscribers} Followers</a></div>
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
