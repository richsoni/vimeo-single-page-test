var Logo = require("./logoComponent")
var Meta = require("./metaComponent")
var C    = require("./constants")

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
// style = {
//   vCenter: {
//     position: 'relative',
//     top: '50%',
//     transform: 'translateY(-50%)'
//   },
//   logo: {
//     float: 'left'
//   },
//   meta: {
//     maxWidth: 300,
//     float: 'left',
//   },
//   info: {
//     width: '100%',
//     backgroundColor: '#333',
//     minHeight: '6em',
//     overflow: 'hidden',
//     padding: '1em',
//     height: '9vw'
//   }
// }

// style.meta = _.extend(style.meta, style.vCenter)

module.exports = React.createClass({
  propTypes: C.INFO_PROPS,

  render: function(){
    return <div>
      <section style={style.info}>
        <Logo style={style.logo} src={this.props.logo} alt={this.props.name} href={this.props.url} />
        <Meta style={style.meta} {...this.props} />
      </section>
    </div>
  }
})
