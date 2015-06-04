var Logo   = require("./logoComponent")
var Meta   = require("./metaComponent")
var Videos = require("./videosComponent")
var C      = require("./constants")

style = {
  logo: {
    width: '100%',
    height: '2em'
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
    return <div>
      <section style={style.info}>
        <iframe
          src="//player.vimeo.com/video/VIDEO_ID?portrait=0&color=333"
          width='100%'
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <Videos style={style.videos} videos={this.props.videos} />
        <Logo style={style.logo} src={this.props.logo} alt={this.props.name} href={this.props.url} />
        <Meta style={style.meta} {...this.props} />
      </section>
    </div>
  }
}

RootComponent.propTypes = _.extend({},C.INFO_PROPS, {
    videos: React.PropTypes.array
})
module.exports = RootComponent
