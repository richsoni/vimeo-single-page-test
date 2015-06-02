Logo = require("./logoComponent")
Meta = require("./metaComponent")
C    = require("./constants")


module.exports = React.createClass({
  propTypes: C.INFO_PROPS,

  render: function(){
    return <article>
      <Logo src={this.props.logo} alt={this.props.name} href={this.props.url} />
      <Meta {...this.props} />
    </article>
  }
})

