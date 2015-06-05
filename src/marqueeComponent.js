class Marquee extends React.Component {
  render() {
    return <div style={this._style()}>
      {this.props.title}
    </div>
  }

  _style() {
    var result = {
      dislay: 'block',
      clear: 'both',
      width: '100%',
      height: 20,
      textAlign: 'center',
      backgroundColor: '#000',
      color: '#fff',
      padding: 10
    }
    if(this.props.active){ result.color = C.COLORS.BLUE}
    return result
  }
}
module.exports = Marquee
