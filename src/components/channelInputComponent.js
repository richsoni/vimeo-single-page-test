var eventStream = require("../util/eventStream")
var style = {
  channelInput: {
    margin:   '1em',
    padding:  '.3em',
    fontSize: '1.5em',
  },
  wrapper: {
    width: '100%',
    textAlign: 'center',
  }
}

class ChannelInput extends React.Component {
  constructor() {
    this.state = {
      value: ''
    }
  }

  render() {
    return <div style={style.wrapper}>
        <input
        style={style.channelInput}
        placeholder='Enter Channel ID or slug'
        value={this.state.value}
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
      />
    </div>
  }

  _onChange(e) {
    this.setState({value: e.target.value})
  }

  _onKeyDown(e) {
    if(e.key === 'Enter'){
      eventStream.push({action: C.ACTIONS.CHANNEL.UPDATE_HASH, payload: this.state.value})
    }
  }
}

module.exports = ChannelInput
