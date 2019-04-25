import React, {Fragment} from 'react'
import {StateLink, withRouterHOC, IntentLink} from 'part:@sanity/base/router'
import Spinner from 'part:@sanity/components/loading/spinner'
import Dialog from 'part:@sanity/components/dialogs/default'
import Button from 'part:@sanity/components/buttons/default'
import Switch from 'part:@sanity/components/toggles/switch'
import Preview from 'part:@sanity/base/preview'
import client from 'part:@sanity/base/client'
import schema from 'part:@sanity/base/schema'
import Brauhaus from 'brauhaus'
import styles from './BrewTool.css'
import {last, get, slice} from 'lodash'
import Dial from './Dial'
import HeidrunMap from '../HeidrunMap'
import Timer from './Timer'
import ReChart from './ReChart'
import Command from './Command'
import dateFns from 'date-fns'
import sendCommand from './sendCommand'

const convertToCelcius = data => {
  return data !== 0 ? data / 100 : 0
}

const convertToLiters = data => {
  return data !== 0 ? data / 1000 : 0
}

function convertLog(log) {
  return log.map(l => {
    return {
      timestamp: new Date(l.timestamp).getTime(),
      profileStatus: l.profileStatus,
      HLT_Setpoint: convertToCelcius(l.HLT_Setpoint),
      HLT_Temperature: convertToCelcius(l.HLT_Temperature),
      HLT_Volume: convertToLiters(l.HLT_Volume),
      Mash_Setpoint: convertToCelcius(l.Mash_Setpoint),
      Mash_Temperature: convertToCelcius(l.Mash_Temperature),
      Kettle_Setpoint: convertToCelcius(l.Kettle_Setpoint),
      Kettle_Temperature: convertToCelcius(l.Kettle_Temperature)
    }
  })
}

const colorScale = ["#00ADEE", "#FDC010", "red"]

// also the same as valve profile
const activeValveProfileStatusDescriptor = [
  'Fill HLT',
  'Fill Mash',
  'Add Grain',
  'Mash Heat',
  'Mash Idle',
  'Sparge In',
  'Sparge Out',
  'Boil Additions',
  'Kettle Lid',
  'Chiller H2O',
  'Chiller Beer',
  'Boil Recirc',
  'Drain',
  'HLT Heat',
  'HLT Idle',
  'Kettle Heat',
  'Kettle Idle',
  'User 1',
  'User 2',
  'User 3'
]


import { 
  VictoryChart, 
  VictoryPie,
  VictoryLabel,
  VictoryLine, 
  VictoryTheme,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryAxis
} from 'victory'

// Set Valve Profile Status (b, 98, 0x62)



const colors = {
  "HLT": "#00ADEE",
  "Mash": "#FFBA00",
  "Kettle": "#CA6D68",
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
        HLT_Volume,
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
const allLogsQuery = `
  *[_type == "brewLog"] { _id, _createdAt, _updatedAt, title, }
`

const query = `
  *[_type == "brewLog"] | order(_createdAt desc) {
    log[] {
        timestamp,
        outputStatus,
        profileStatus,
        AUX1_Temperature,
        HLT_HeatPower,
        HLT_Setpoint,
        HLT_Temperature,
        HLT_Volume,
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

class BrewStatus extends React.Component {

  state = {
    log: undefined,
    debugRunning: false,
    fullscreen: false,
    showCommand: false,
    showActiveValveProfiles: false,
    zoomDomain: { 
      x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] 
    }
  }

  componentDidMount() {
    if (!this.state.log) {
      client.fetch(query).then(result => {
        this.logBackup = result.log.filter(i => i.AUX1_Temperature),
        this.setState({
          log: result.log.filter(i => i.AUX1_Temperature),
        })
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

  showActiveValveProfiles = () => {
    this.setState({
      showActiveValveProfiles: true
    })
  }

  hideActiveValveProfiles = () => {
    this.setState({
      showActiveValveProfiles: false
    })
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  handleActiveValveSwitch = event => {
    // b&1&1
    //b & bitmask & on/off
    const bitmask = Math.pow(2, event.target.value)
    console.log(event.target.value, bitmask)
    const status = event.target.checked ? 1 : 0
    const command = `b&${bitmask}&${status}`
    sendCommand(command)
  }

  stopAlarm = () => {
    sendCommand('V&0')
  }

  startAlarm = () => {
    sendCommand('V&1')
  }

  togglePanel = () => {
    this.setState({
      showPanel: !this.state.showPanel
    })
  }

  consoleLog = () => {
    console.log(this.state.log)
  }

  consoleLiveItem = () => {
    console.log(last(this.state.log) || 'Not live')
  }

  runDebug = () => {
    this.setState({
      debugRunning: true,
      log: []
    })
    let i = 1
    this.debugInterval = setInterval(() => {
      this.setState({
        log: this.logBackup.slice(0, i)
      })
      i++
    }, 50)
  }

  stopDebug = () => {
    clearInterval(this.debugInterval)
    this.setState({
      debugRunning: false,
      log: this.logBackup
    })
  }

  toggleCommand = () => {
    this.setState({
      showCommand: !this.state.showCommand
    })
  }
  
  openFullscreen = () => {
    const elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen()
    }
    this.setState({fullscreen: true})
  } 
  
  closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    this.setState({fullscreen: false})
  }

  render() {
    const {
      log = [],
      time,
      showActiveValveProfiles,
      showPanel,
      debugRunning,
      fullscreen,
      showCommand
    } = this.state

    const liveItem = last(log) || {}

    return (
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <Button onClick={this.toggleCommand} color="primary" inverted={!showCommand}>Command</Button>
          <Button onClick={this.showActiveValveProfiles} color="primary" inverted>Valve profiles</Button>
          <Button onClick={this.togglePanel} color="primary" inverted={!showPanel}>Panel</Button>
          <Button onClick={this.consoleLog} color="primary" inverted>Console.log</Button>
          <Button onClick={this.consoleLiveItem} color="primary" inverted>LiveItem</Button>
          {
            !fullscreen && <Button onClick={this.openFullscreen} color="primary" inverted>Fullscreen</Button>
          }
          {
            fullscreen && <Button onClick={this.closeFullscreen} color="primary">Exit fullscreen</Button>
          }
          {
            !debugRunning && <Button onClick={this.runDebug} color="danger" inverted>Run debug</Button>
          }
          {
            debugRunning && <Button onClick={this.stopDebug} color="danger">Stop debug</Button>
          }

          {
            liveItem && liveItem.alarmStatus == 1 && (
              <Button onClick={this.stopAlarm} color="danger">Stop alarm</Button>
            )
          }
          {
            liveItem && liveItem.alarmStatus == 0 && (
              <Button onClick={this.startAlarm} color="danger" inverted>Start alarm</Button>
            )
          }
        </div>
        {
          liveItem && (
            <div className={styles.live}>
              {liveItem.alarmStatus == 1 && <div className={styles.alarm} />}
              <div>
                <Timer lastTime={new Date(liveItem.timestamp)} />
              </div>
              <div>
                Profile(s): 
                {
                  activeValveProfileStatusDescriptor.filter((value, index) => liveItem.profileStatus & (1 << index)).map(value => {
                    return value
                  }).join(', ')
                }
              </div>
            </div>
          )
        }
        {
          showCommand && (
            <Command onClose={this.toggleCommand} />
          )
        }
        {
          showActiveValveProfiles && (
            <Dialog
              onClose={this.hideActiveValveProfiles}
            >
              <div className={styles.dialogContent}>
                <h3>Active Valve Profiles Bitmask (profileStatus {liveItem.profileStatus})</h3>
                <div className={styles.valveStatus}>
                  {
                    activeValveProfileStatusDescriptor.map((valve, i) => {
                      return (
                        <div key={i}>
                          <Switch
                            checked={!!(liveItem.profileStatus & (1 << i))}
                            onChange={this.handleActiveValveSwitch} label={valve}
                            value={i}
                          />
                          &nbsp;&nbsp;
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </Dialog>
          )
        }
        {
          liveItem && (
            <div className={styles.mapAndDials}>
              {
                showPanel && <HeidrunMap outputStatus={liveItem.outputStatus} />
              }
              <div className={styles.dials}>
                <Dial
                  key="HLT"
                  title="HLT"
                  className={styles.dial}
                  temperature={liveItem.HLT_Temperature > 0 ? liveItem.HLT_Temperature / 100 : 0}
                  setpoint={liveItem.HLT_Setpoint > 0 ? liveItem.HLT_Setpoint / 100 : 0}
                  power={liveItem.HLT_HeatPower}
                  volume={convertToLiters(liveItem.HLT_Volume)}
                  color={colors['HLT']}
                />
                <Dial
                  key="MASH"
                  title="MASH"
                  className={styles.dial}
                  temperature={liveItem.Mash_Temperature > 0 ? liveItem.Mash_Temperature / 100 : 0}
                  setpoint={liveItem.Mash_Setpoint > 0 ? liveItem.Mash_Setpoint / 100 : 0}
                  power={liveItem.Mash_HeatPower}
                  color={colors['Mash']}
                />
                <Dial
                  key="BOIL"
                  title="Boil"
                  className={styles.dial}
                  temperature={liveItem.Kettle_Temperature > 0 ? liveItem.Kettle_Temperature / 100 : 0}
                  setpoint={liveItem.Kettle_Setpoint > 0 ? liveItem.Kettle_Setpoint / 100 : 0}
                  power={liveItem.Kettle_HeatPower}
                  color={colors['Kettle']}
                />
              </div>
            </div>
          )
        }
        <div className={styles.chart}><ReChart log={convertLog(log)} colors={colors} /></div>
      </div>
    )
  }
}

export default withRouterHOC(BrewStatus)
