import React from 'react'
import {StateLink, withRouterHOC, IntentLink} from 'part:@sanity/base/router'
import Spinner from 'part:@sanity/components/loading/spinner'
import Preview from 'part:@sanity/base/preview'
import client from 'part:@sanity/base/client'
import schema from 'part:@sanity/base/schema'
import Brauhaus from 'brauhaus'
import styles from './BrewTool.css'
import {last, get} from 'lodash'
import Dial from './Dial'
import HeidrunMap from '../HeidrunMap'
import Timer from './Timer'

import { 
  VictoryChart, 
  VictoryPie,
  VictoryLabel,
  VictoryLine, 
  VictoryTheme
} from 'victory'

const colors = {
  "HLT_Temperature": "#00ADEE",
  "Mash_Temperature": "#FFBA00",
  "Kettle_Temperature": "#CA6D68",
}

const liveQuery = `
  *[_type == "brewLog"] | order(_createdAt desc) {
    log[0] {
        alarmStatus,
        autoValveStatus,
        outputStatus,
        profileStatus,
        AUX1_Temperature,
        HLT_HeatPower,
        HLT_Setpoint,
        HLT_Temperature,
        Kettle_HeatPower,
        Kettle_Setpoint,
        Kettle_Temperature,
        Mash_HeatPower,
        Mash_Setpoint,
        Mash_Temperature,
        Mash_TimerStatus,
        Mash_TimerValue
    }
  }[0]
`

const query = `
  *[_type == "brewLog"] | order(_createdAt desc) {
    log[] {
        timestamp,
        autoValveStatus,
        AUX1_Temperature,
        HLT_HeatPower,
        HLT_Setpoint,
        HLT_Temperature,
        Kettle_HeatPower,
        Kettle_Setpoint,
        Kettle_Temperature,
        Mash_HeatPower,
        Mash_Setpoint,
        Mash_Temperature,
        Mash_TimerStatus,
        Mash_TimerValue
    }
  }[0]
`

// Set Program Settings '?'

class BrewStatus extends React.Component {

  state = {
    log: undefined
  }

  componentDidMount() {
    if (!this.state.log) {
      client.fetch(query).then(result => {
        this.setState({log: result.log.filter(i => i.AUX1_Temperature)})
      })
    }

    this.subscription = client.listen(
      liveQuery, 
      {}, 
      {includeResult: false}
    ).subscribe(res => {
      const liveItem = get(res, 'mutations[0].patch.insert.items[0]')
      if (liveItem) {
        this.setState(prevState => ({log: prevState.log.concat(liveItem)}))
      }
    })
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  render() {
    const {log = [{}], time} = this.state

    const liveItem = last(log) || {}

    console.log('last item', liveItem)

    const colorScale = ["#00ADEE", "#FDC010", "red"]
    const pieSettings = {
      startAngle: 90,
      endAngle: -180,
      innerRadius: 140,
      animate: {duration: 200}
    }
    return (
      <div className={styles.container}>
        {
          liveItem && (
            <Timer lastTime={liveItem.timestamp} />
          )
        }

        {
          liveItem && (
            <HeidrunMap outputStatus={liveItem.outputStatus} />
          )
        }
        {
          liveItem && (
            <div className={styles.dials}>
              <Dial
                key="HLT"
                title="HLT"
                className={styles.dial}
                temperature={liveItem.HLT_Temperature > 0 ? liveItem.HLT_Temperature / 100 : 0}
                setpoint={liveItem.HLT_Setpoint > 0 ? liveItem.HLT_Setpoint / 100 : 0}
                power={liveItem.HLT_HeatPower}
                color={colors['HLT_Temperature']}
              />
              <Dial
                key="MASH"
                title="MASH"
                className={styles.dial}
                temperature={liveItem.Mash_Temperature > 0 ? liveItem.Mash_Temperature / 100 : 0}
                setpoint={liveItem.Mash_Setpoint > 0 ? liveItem.Mash_Setpoint / 100 : 0}
                power={liveItem.Mash_HeatPower}
                color={colors['Mash_Temperature']}
              />
              <Dial
                key="BOIL"
                title="Boil"
                className={styles.dial}
                temperature={liveItem.Kettle_Temperature > 0 ? liveItem.Kettle_Temperature / 100 : 0}
                setpoint={liveItem.Kettle_Setpoint > 0 ? liveItem.Kettle_Setpoint / 100 : 0}
                power={liveItem.Kettle_HeatPower}
                color={colors['Kettle_Temperature']}
              />
            </div>
          )
        }
        <VictoryChart
          width={1500} height={500}
          theme={VictoryTheme.material}
          maxDomain={{ y: 100 }}
          minDomain={{ y: 0 }}
          scale={{ x: "time" }}
        >
          {/* <VictoryAxis
            tickValues={[2, 3, 4, 5]}
            minDomain={{ x: 0 }}
          /> */}
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

export default withRouterHOC(BrewStatus)
