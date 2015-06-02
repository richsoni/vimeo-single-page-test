Logo = require("./logoComponent")
Meta = require("./metaComponent")
C    = require("./constants")

module.exports = React.createClass({
  propTypes: C.INFO_PROPS,

  render: function(){
    return <article>
      <Logo style={{
        width: '100%',
        minHeight: 200
      }} src={this.props.logo} alt={this.props.name} href={this.props.url} />
      <Meta style={{
        maxWidth: 300
      }} {...this.props} />
    </article>
  }
})
