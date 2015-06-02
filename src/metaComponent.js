C = require("./constants")
module.exports = React.createClass({
  propTypes: C.INFO_PROPS,
  _style: {
    link: {
      color: '#fff'
    }
  },

  render: function(){
    return <div>
      <div>Created By: <a style={this._style.link} href={this.props.creator_url}>{this.props.creator_display_name}</a> in {moment(this.props.created_on).format('YYYY')}</div>
      <div>{this.props.description}</div>
      <div><a style={this._style.link} href={this.props.rss}><i className='fa fa-rss'></i>{this.props.name}</a></div>
      <div><a style={this._style.link} href={this._videosLink}> {this.props.total_videos} Videos</a></div>
      <div><a style={this._style.link} href={this._followersLink}> {this.props.total_subscribers} Followers</a></div>
    </div>
  },

  _followersLink: function(){
    return this.props.url+'/followers'
  },

  _videosLink: function(){
    return this.props.url+'/videos'
  }
})

