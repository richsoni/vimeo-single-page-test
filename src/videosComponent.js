class Video extends React.Component {
  render() {
    return <div>{this.props.title}</div>
  }
}
Video.propTypes = {
  id:                       React.PropTypes.number,
  title:                    React.PropTypes.string,
  description:              React.PropTypes.string,
  url:                      React.PropTypes.string,
  upload_date:              React.PropTypes.string,
  mobile_url:               React.PropTypes.string,
  thumbnail_small:          React.PropTypes.string,
  thumbnail_medium:         React.PropTypes.string,
  thumbnail_large:          React.PropTypes.string,
  user_id:                  React.PropTypes.number,
  user_name:                React.PropTypes.string,
  user_url:                 React.PropTypes.string,
  user_portrait_small:      React.PropTypes.string,
  user_portrait_medium:     React.PropTypes.string,
  user_portrait_large:      React.PropTypes.string,
  user_portrait_huge:       React.PropTypes.string,
  stats_number_of_likes:    React.PropTypes.number,
  stats_number_of_plays:    React.PropTypes.number,
  stats_number_of_comments: React.PropTypes.number,
  duration:                 React.PropTypes.number,
  width:                    React.PropTypes.number,
  height:                   React.PropTypes.number,
  tags:                     React.PropTypes.string,
  embed_privacy:            React.PropTypes.string
}

class Videos extends React.Component {

  render() {
    return <div>
      {this.props.videos.map(function(video){
        return <Video {...video} />
      })}
    </div>
  }
}

Videos.propTypes = {
  videos: React.PropTypes.array,
  style:  React.PropTypes.object
}
Videos.defaultProps = {
  videos: [],
  style:  {}
}
module.exports = Videos
