import React from 'react'
import PropTypes from 'prop-types'
import {last, get} from 'lodash'
import Button from 'part:@sanity/components/buttons/default'
import styles from './ReChart.css'
import MdZoom from 'react-icons/lib/md/zoom-in'
import dateFns, { differenceInMinutes, differenceInSeconds } from 'date-fns'

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
  ReferenceArea,
  Area,
  Label,
  ComposedChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts'

export default class HeidrunChart extends React.PureComponent {

	constructor(props) {
    super(props);
    // const minTime = this.props.log && this.props.log.length > 0 ? this.props.log[0].timestamp + 60 * 60 * 1000 * 3 : 0
    this.state = {
      // log: this.props.log,
      left : 'dataMin',
      // right: this.props.log && this.props.log.length > 0 ? Math.max(minTime, last(this.props.log).timestamp) : 'dataMax',
      refAreaLeft: '',
      refAreaRight: '',
      top: 100,
      bottom: 4,
      animation: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    // 3 hours 
    const minTime = props.log && props.log.length > 0 ? props.log[0].timestamp + 60 * 60 * 1000 * 3 : 0
    return {
      log: props.log,
      right: props.log && props.log.length > 0 ? Math.max(minTime, last(props.log).timestamp) : 'dataMax'
    }
  }


  getAxisYDomain = (from, to, ref, offset) => {
    // const refData = this.props.log.slice(from-1, to);
    const refData = this.props.log.filter(item => {
      return item.timestamp >= from && item.timestamp <= to
    })
    let [ bottom, top ] = [
      refData[0][ref],
      refData[0][ref]
    ];
    refData.forEach( d => {
      if ( d[ref] > top ) top = d[ref];
      if ( d[ref] < bottom ) bottom = d[ref];
    });
    return [ (bottom|0) - offset, (top|0) + offset ]
  };
  
  zoom(){  
  	let { refAreaLeft, refAreaRight, log } = this.state

		if ( refAreaLeft === refAreaRight || refAreaRight === '' ) {
    	this.setState( () => ({
      	refAreaLeft : '',
        refAreaRight : ''
      }) )
    	return
    }

		// xAxis domain
	  if ( refAreaLeft > refAreaRight ) 
    		[ refAreaLeft, refAreaRight ] = [ refAreaRight, refAreaLeft ]

    // yAxis domain
    const [ bottom1, top1 ] = this.getAxisYDomain( refAreaLeft, refAreaRight, 'Mash_Temperature', 10 );
    const [ bottom2, top2 ] = this.getAxisYDomain( refAreaLeft, refAreaRight, 'HLT_Setpoint', 10 );
    const [ bottom3, top3 ] = this.getAxisYDomain( refAreaLeft, refAreaRight, 'Mash_Temperature', 10 );
    const [ bottom4, top4 ] = this.getAxisYDomain( refAreaLeft, refAreaRight, 'Mash_Setpoint', 10 );

    const bottom = Math.min(bottom1, bottom2, bottom3, Math.max(bottom4, 0))
    const top = Math.max(top1, top2, top3, top4)

    this.setState( () => ({
      refAreaLeft : '',
      refAreaRight : '',
    	log : log.slice(),
      left : refAreaLeft,
      right : refAreaRight,
      bottom,
      top,
    }))
  }

  distanceInTime = (s, end) => {
    var date = new Date(null);
    date.setSeconds((end - s) / 1000)
    return date.toISOString().substr(11, 8);
  }

  formatXAxis = timestamp => {
    if (this.state.log && this.state.log.length > 0) {
      const start = this.state.log[0].timestamp
      return this.distanceInTime(start, timestamp)
    }
    return 0
  }

	zoomOut() {
  	const { log } = this.state;
  	this.setState( () => ({
      log : log.slice(),
      refAreaLeft : '',
      refAreaRight : '',
      left : 'dataMin',
      right : 'dataMax',
      top : 100,
      bottom : 4,
    }) );
  }
  
  renderTooltip = props => {
    const {label, payload} = props
    console.log(payload)
    return (
      <div className={styles.tooltip}>
        <div className={styles.legend}>
          {this.state.log && this.state.log.length > 0 && this.state.log[0].timestamp && label && this.distanceInTime(this.state.log[0].timestamp, label)}
        </div>
        {
          payload.map(item => {
            return (
              <div style={{color: item.stroke}} className={styles.tooltipLine} key={item.dataKey}>
                <div>{item.name}</div>
                <div>{item.value}℃</div>
              </div>
            )
          })
        }
        {
          payload[0] && payload[3] && (
            <div style={{color: '#fff', marginTop: '1em'}} className={styles.tooltipLine}>
              <div>HLT/MASH diff</div>
              <div>{Number(payload[0].value - payload[4].value).toFixed(1)}℃</div>
            </div>
          )
        }
        {
          payload[0] && payload[0].payload && payload[0].payload.profileStatus && (
            <div>
              {
                activeValveProfileStatusDescriptor.filter((value, index) => payload[0].payload.profileStatus & (1 << index)).map(value => {
                  return <div key={value}>{value}</div>
                })
              }
            </div>
          )
        }
      </div>
    )
  }

  render() {
    const { log, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom } = this.state
    const { colors } = this.props
    return (
      <div className={styles.root}>
        <Button
          color="primary"
          inverted
          icon={MdZoom}
          onClick={this.zoomOut.bind( this )}
          title="Zoom out"
        />
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            className={styles.chart}
            data={log}
            onMouseDown = { (e) => this.setState({refAreaLeft:e.activeLabel}) }
            onMouseMove = { (e) => this.state.refAreaLeft && this.setState({refAreaRight:e.activeLabel}) }
            onMouseUp = { this.zoom.bind( this ) }
          >
            {/* <CartesianGrid strokeDasharray="3 3"/> */}
            <XAxis 
              allowDataOverflow={true}
              dataKey="timestamp"
              tickFormatter={this.formatXAxis}
              domain={[left, right]}
              type="number"
            />
            <YAxis 
              allowDataOverflow={true}
              domain={[bottom, top]}
              type="number"
              yAxisId="1"
              unit="℃"
            />
            <Line name="HLT Temperature"
              dataKey='HLT_Temperature'
              dot={false}
              type='monotone'
              yAxisId="1"
              connectNulls={true}
              stroke={colors['HLT']}
              animationDuration={100}
              isAnimationActive={false}
              animationEasing="linear"
            />
            <Area name="HLT Volume"
              dataKey='HLT_Volume'
              dot={false}
              type='monotone'
              yAxisId="1"
              connectNulls={true}
              stroke={colors['HLT']}
              stroke={colors['HLT']}
              opacity={0.1}
              animationDuration={100}
              isAnimationActive={false}
              animationEasing="linear"
            />

            <Line name='HLT Setpoint'
              dataKey='HLT_Setpoint'
              stroke={colors['HLT']}
              strokeOpacity={0.3}
              dot={false}
              type='monotone'
              yAxisId="1"
              animationDuration={100}
              isAnimationActive={false}
              animationEasing="linear"
            />
            <Line name='Mash Setpoint'
              dataKey='Mash_Setpoint'
              stroke={colors['Mash']}
              strokeOpacity={0.3}
              dot={false}
              type='monotone'
              yAxisId="1"
              animationDuration={100}
              isAnimationActive={false}
              animationEasing="linear"
            />
            <Line name='Mash Temperature'
              dataKey='Mash_Temperature'
              stroke={colors['Mash']}
              dot={false}
              type='monotone'
              yAxisId="1"
              animationDuration={100}
              isAnimationActive={false}
              animationEasing="linear"
            />
            <Line name='Kettle Temperature'
              dataKey='Kettle_Temperature'
              stroke={colors['Kettle']}
              dot={false}
              yAxisId="1"
              type='monotone'
              animationDuration={100}
              isAnimationActive={false}
              animationEasing="linear"
            />
            <Line name='Kettle Setpoint'
              dataKey='Kettle_Setpoint'
              stroke={colors['Kettle']}
              strokeOpacity={0.3}
              dot={false}
              type='monotone'
              yAxisId="1"
              animationDuration={100}
              isAnimationActive={false}
              animationEasing="linear"
            />

            <Tooltip
              content={this.renderTooltip}
              animationDuration={50}
            />

            <ReferenceArea
              y1={64}
              y2={70}
              fill={colors['Mash_Temperature']}
              yAxisId="1"
              fillOpacity={0.1}
            />
            
            {
              (refAreaLeft && refAreaRight) ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight}  strokeOpacity={0.3} /> ) : null
            }          
          </ComposedChart> 
        </ResponsiveContainer>
      </div>
    )
  }
}