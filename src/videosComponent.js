Video = React.createClass({
  propTypes: {
    video: React.PropTypes.object
  },

  render: function(){
    return <div>video</div>
  }
})

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
    return <div>
      {this.props.videos.map(function(video){
        return <Video video={video} />
      })}
    </div>
  }
})

