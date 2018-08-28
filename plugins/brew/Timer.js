import React from 'react'
import dateFns from 'date-fns'
export default class Timer extends React.PureComponent {

  state = {
    time: new Date().getTime()
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000)
  }

  render() {
    const {lastTime} = this.props
    const {time} = this.state
    if (!time || !lastTime) {
      return <span />
    }
    return (
      <div>
          Last update {dateFns.distanceInWords(lastTime, time)} ago
      </div>
    )
  }
}
