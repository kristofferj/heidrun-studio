import React from 'react'

export default class Timer extends React.PureComponent {

  state = {
    time: new Date().getTime()
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({
        time: new Date().getTime()
      })
    }, 500)
  }

  render() {
    const {lastTime} = this.props
    const {time} = this.state
    const timeAgo = (time - new Date(lastTime).getTime()) / 1000
    return (
      <div>
          Live! Last update {timeAgo.toFixed(2)}s ago
      </div>
    )
  }
}
