import React from 'react'
import PropTypes from 'prop-types'
import {last, get} from 'lodash'

import { 
  VictoryChart, 
  VictoryPie,
  VictoryLabel,
  VictoryLine, 
  VictoryTheme,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryVoronoiContainer
} from 'victory'


export default class HeidrunMap extends React.PureComponent {
  static propTypes = {
    log: PropTypes.array,
  }

  state = {
    start: this.props.log[0],
    zoomDomain: {
      x: [
        new Date(this.props.log[0].timestamp),
        new Date(last(this.props.log).timestamp)
      ]
    }
  }


  handleZoom = domain => {
    this.setState({ zoomDomain: domain })
  }

  render() {
    const {log, colors} = this.props
    return (
      <div>
        <VictoryChart
          width={1500} height={500}
          theme={VictoryTheme.material}
          // maxDomain={{ y: 100 }}
          // minDomain={{ y: 0 }}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom}
            />
            // <VictoryVoronoiContainer
            //   labels={(d) => `${d.x}, ${d.y}`}
            // />
          }
        >
          <VictoryAxis
            tickFormat={(x) => new Date(x).getHours()}
          />
          {
            Object.keys(log[0]).map(key => {
              return (
                <VictoryLine
                  key={key}
                  style={{
                    data: { stroke: colors[key] },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={log.map((item, i) => {
                    return {
                      x: new Date(item.timestamp), 
                      y: item[key] > 0 ? item[key] / 100 : 0}
                  })}
                />
              )
            })
          }
        </VictoryChart>
        <VictoryChart
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          width={1500}
          height={100}
          // maxDomain={{ y: 100 }}
          // minDomain={{ y: 0 }}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={this.state.zoomDomain}
              onBrushDomainChange={this.handleZoom}
            />
          }
        >
          <VictoryAxis
            tickFormat={(x) => new Date(x).getHours()}
          />
          {
            Object.keys(log[0]).map(key => {
              return (
                <VictoryLine
                  key={key}
                  style={{
                    data: { stroke: colors[key] },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={log.map((item, i) => {
                    return {
                      x: new Date(item.timestamp), 
                      y: item[key] > 0 ? item[key] / 100 : 0}
                  })}
                />
              )
            })
          }
        </VictoryChart>
      </div>
    )
  }
}