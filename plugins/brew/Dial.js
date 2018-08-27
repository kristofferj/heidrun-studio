import React, {Fragment} from 'react'
import tinyColor from 'tinycolor2'
import PropTypes from 'prop-types'

import { 
  VictoryChart, 
  VictoryPie,
  VictoryLabel,
  VictoryLine, 
  VictoryTheme
} from 'victory'

class Dial extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    temperature: PropTypes.number,
    setpoint: PropTypes.number,
    className: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    const {
      title,
      temperature,
      setpoint,
      className,
      color = '#ffffff',
      power = 0
    } = this.props

    const pieSettings = {
      startAngle: 90,
      endAngle: -180,
      innerRadius: 140,
      animate: {duration: 200}
    }

    const dialColor = tinyColor(color)

    const temperatureData = [
      { x: 1, y: 100 - temperature},
      { x: 2, y: temperature}, 
    ]

    const setPointData = [
      { x: 1, y: 100 - setpoint},
      { x: 2, y: setpoint},
    ]

    return (
      <Fragment>
        <svg viewBox="0 0 400 400" className={className}>
          <VictoryPie
            standalone={false}
            width={400} height={400}
            colorScale={[dialColor.setAlpha(.05).toRgbString(), color]}
            data={temperatureData}
            {...pieSettings}
          />
          <VictoryPie
            standalone={false}
            width={400} height={400}
            colorScale={[dialColor.setAlpha(0).toRgbString(), dialColor.setAlpha(.2).toRgbString()]}
            data={setPointData}
            {...pieSettings}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 60, fill: "white" }}
            x={200} y={200}
            text={`${temperature.toFixed(1)}℃`} 
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 25, fill: "white" }}
            x={200} y={250}
            text={`${setpoint.toFixed(1)}℃`}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 25, fill: "white" }}
            x={200} y={130}
            text={title}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 20, fill: "white" }}
            x={200} y={290}
            text={`${power || 0}% power`}
          />
        </svg>
      </Fragment>
    )
  }
}

export default Dial
