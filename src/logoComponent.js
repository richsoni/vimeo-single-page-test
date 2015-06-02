module.exports = React.createClass({
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
