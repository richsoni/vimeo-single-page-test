
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
    src: React.PropTypes.string,
    alt: React.PropTypes.string
  },

  render: function(){
    if (this.props.src.length > 0){
      return <div style={this._style.container}>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    } else {
      return <div style={this._style.container}>
        {this.props.alt}
      </div>
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
      <Logo src={this.props.logo} alt={this.props.name} />
    </article>
  }
})

