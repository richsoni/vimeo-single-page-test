var infoStore = require("./infoStore")
var Logo      = require("./logoComponent")
var Meta      = require("./metaComponent")
var Videos    = require("./videosComponent")
var C         = require("./constants")

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
    width: '100%',
    marginTop:'2em'
  },

  info: {
    width: '100%',
    overflow: 'hidden',
    padding: '1em',
    boxSizing: 'border-box'
  },
  fullPageLoad: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    fontSize: '14vw'
  }
}

class LoadedComponent extends React.Component {

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

LoadedComponent.propTypes = _.extend({},C.INFO_PROPS, {
    info: React.PropTypes.object
})

class RootComponent extends React.Component {
  render() {
    var info = infoStore.toJS()
    if(info.id){
      return <LoadedComponent {...info} />
    } else {
      return <div style={style.fullPageLoad}>
        <div >
          <i className='fa fa-spinner fa-spin'></i>
        </div>
      </div>
    }
  }
}
module.exports = RootComponent
