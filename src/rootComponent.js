
Logo = React.createClass({
  _style: {
    container: {
      width: '100%',
      minHeight: 200,
      textAlign: 'center',
      fontSize: '3em'
    }
  },

  propTypes: {
    src:  React.PropTypes.string,
    alt:  React.PropTypes.string,
    href: React.PropTypes.string
  },

  render: function(){
      return <div style={this._style.container}>
        <a style={{textDecoration: 'none'}} href={this.props.href}> {this._content()} </a>
      </div>
  },

  _content: function() {
    if (this.props.src.length > 0){
      return <img style={{maxWidth: '100%'}} src={this.props.src} alt={this.props.alt} />
    } else {
      return <span style={{color: '#fff'}}>{this.props.alt}</span>
    }
  }
})

module.exports = React.createClass({
  propTypes: {
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
  },

  render: function(){
    return <article>
      <Logo src={this.props.logo} alt={this.props.name} href={this.props.url} />
    </article>
  }
})

