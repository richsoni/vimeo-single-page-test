Logo = require("./logoComponent")

INFO_PROPS = {
  id:                   React.PropTypes.number,
  name:                 React.PropTypes.string,
  description:          React.PropTypes.string,
  logo:                 React.PropTypes.string,
  badge:                React.PropTypes.string,
  url:                  React.PropTypes.string,
  rss:                  React.PropTypes.string,
  created_on:           React.PropTypes.string,
  creator_id:           React.PropTypes.number,
  creator_display_name: React.PropTypes.string,
  creator_url:          React.PropTypes.string,
  total_videos:         React.PropTypes.number,
  total_subscribers:    React.PropTypes.number
}

Meta = React.createClass({
  propTypes: INFO_PROPS,
  _style: {
    link: {
      color: '#fff'
    }
  },

  render: function(){
    return <div>
      <div>Created By: <a style={this._style.link} href={this.props.creator_url}>{this.props.creator_display_name}</a> in {moment(this.props.created_on).format('YYYY')}</div>
      <div>{this.props.description}</div>
      <div><a style={this._style.link} href={this.props.rss}>(TK FEED ICON){this.props.name}</a></div>
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

module.exports = React.createClass({
  propTypes: INFO_PROPS,

  render: function(){
    return <article>
      <Logo src={this.props.logo} alt={this.props.name} href={this.props.url} />
      <Meta {...this.props} />
    </article>
  }
})

