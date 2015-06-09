var style = {
  channelInput: {
    margin: '1em',
    padding: '.3em',
    fontSize: '1.5em',
  }
}

class ChannelInput extends React.Component {
  render() {
    return <input
      style={style.channelInput}
      placeholder='Enter Channel ID or slug'
    />
  }
}

module.exports = ChannelInput
