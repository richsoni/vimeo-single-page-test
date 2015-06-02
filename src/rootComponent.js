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
  render: function(){
    return <div>
      here
    </div>
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

