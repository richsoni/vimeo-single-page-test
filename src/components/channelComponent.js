var Logo         = require("./logoComponent")
var Meta         = require("./metaComponent")
var Videos       = require("./videosComponent")
var C            = require("../lib/constants")

var style = {
  logo: {
    width:              '100%',
    backgroundSize:     'contain',
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center',
    height:             '20vw',
    marginBottom:       '1em'
  },
  meta: {
    width:     '100%',
    marginTop: '2em'
  },

  info: {
    width:      '100%',
    overflow:   'hidden',
    padding:    '1em',
    background: 'black',
    boxSizing:  'border-box',
  },
}

class ChannelComponent extends React.Component {

  render() {
    return <section style={style.info}>
        <Logo style={style.logo} src={this.props.logo} alt={this.props.name} href={this.props.url} />
        <Videos
          style={style.videos}
          total={this.props.total_videos}
        />
        <Meta style={style.meta} {...this.props} />
      </section>
  }
}

ChannelComponent.propTypes = _.extend({},C.INFO_PROPS, {
    info: React.PropTypes.object
})
module.exports = ChannelComponent
