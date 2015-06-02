Logo = require("./logoComponent")
Meta = require("./metaComponent")
C    = require("./constants")

style = {
  logo: {
    width: '100%',
    minHeight: 200
  },
  meta: {
    maxWidth: 300
  }
}

module.exports = React.createClass({
  propTypes: C.INFO_PROPS,

  render: function(){
    return <article>
      <Logo style={style.logo} src={this.props.logo} alt={this.props.name} href={this.props.url} />
      <Meta style={style.meta} {...this.props} />
    </article>
  }
})
