import React, {Fragment} from 'react'
import tinyColor from 'tinycolor2'
import PropTypes from 'prop-types'
import dateFns from 'date-fns'
import { 
  VictoryChart, 
  VictoryPie,
  VictoryLabel,
  VictoryLine, 
  VictoryTheme
} from 'victory'

function formatXAxis(start, timestamp) {
  return dateFns.format(tickItem)
}

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
      volume,
      className,
      color = '#ffffff',
      power = 0
    } = this.props

    const pieSettings = {
      startAngle: 90,
      endAngle: -180,
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
            colorScale={[dialColor.setAlpha(0.05).toRgbString(), color]}
            data={temperatureData}
            radius={200}
            innerRadius={190}
            {...pieSettings}
          />
          <VictoryPie
            standalone={false}
            width={400} height={400}
            colorScale={[dialColor.setAlpha(0.05).toRgbString(), dialColor.setAlpha(.5).toRgbString()]}
            data={setPointData}
            radius={187}
            innerRadius={180}
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
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 20, fill: "white" }}
            x={200} y={330}
            text={`${volume || 0} Liters`}
          />
        </svg>
      </Fragment>
    )
  }
}

export default Dial
