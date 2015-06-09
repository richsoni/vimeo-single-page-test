style = {
  container: {
    height:             200,
    fontSize:           '4em',
    textAlign:          'center',
    backgroundSize:     "contain",
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center'
  }
}

class LogoComponent extends React.Component {

  render() {
      return <div style={_.extend({}, this.props.style, style.container, {backgroundImage: "url("+this.props.src+")"})}>
        <a style={{textDecoration: 'none'}} href={this.props.href}> {this._content()} </a>
      </div>
  }

  _content() {
    if (this.props.src.length > 0){
      return "";
    } else {
      return <span style={{color: '#fff'}}>{this.props.alt}</span>
    }
  }
}

LogoComponent.propTypes = {
  src:   React.PropTypes.string,
  alt:   React.PropTypes.string,
  href:  React.PropTypes.string,
  style: React.PropTypes.object
}

LogoComponent.defaultProps = {
  style: {}
}
module.exports = LogoComponent
