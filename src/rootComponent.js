var Logo   = require("./logoComponent")
var Meta   = require("./metaComponent")
var Videos = require("./videosComponent")
var C      = require("./constants")

style = {
  body: {
    maxWidth: 940,
    background: 'black',
    margin: 'auto'
  },
  logo: {
    width: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '20vw',
    marginBottom: '1em'
  },
  meta: {
    maxWidth: 400,
    textAlign: 'center',
    margin: 'auto'
  },

  info: {
    width: '100%',
    overflow: 'hidden',
    padding: '1em',
    boxSizing: 'border-box'
  }
}

class RootComponent extends React.Component {

  render() {
    return <div style={style.body}>
      <section style={style.info}>
        <Logo style={style.logo} src={this.props.logo} alt={this.props.name} href={this.props.url} />
        <Videos style={style.videos}  />
        <Meta style={style.meta} {...this.props} />
      </section>
    </div>
  }
}

RootComponent.propTypes = _.extend({},C.INFO_PROPS, {
    info: React.PropTypes.object
})
module.exports = RootComponent
