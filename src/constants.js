module.exports = {
  INFO_PROPS: {
    id:                   React.PropTypes.number,
    name:                 React.PropTypes.string,
    description:          React.PropTypes.string,
    logo:                 React.PropTypes.string,
    badge:                React.PropTypes.string,
    url:                  React.PropTypes.string,
    rss:                  React.PropTypes.string,
    created_on:           React.PropTypes.string,
    creator_id:           React.PropTypes.number,
    creator_display_name: React.PropTypes.string,
    creator_url:          React.PropTypes.string,
    total_videos:         React.PropTypes.number,
    total_subscribers:    React.PropTypes.number
  },
  VIDEO_PROPS: {
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
  },
  ACTIONS: {
    VIDEO: {
      PLAY: {}
    },
    MARQUEE: {
      LOAD:  {},
      CLEAR: {}
    }
  },

  COLORS: {
    BLUE: 'rgb(0, 173, 239)',
    DIM:  '#AEAEAE'
  }

}
