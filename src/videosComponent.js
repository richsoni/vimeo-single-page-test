module.exports = React.createClass({
  propTypes: {
    videos: React.PropTypes.array,
    style:  React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      videos: [],
      style:  {}
    }
  },

  render: function(){
    return <div> here </div>
  }
})

