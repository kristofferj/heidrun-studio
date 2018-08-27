import React from 'react'
import PropTypes from 'prop-types'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import css from './OutputStatusBitmask.css'
import HeidrunMap from './HeidrunMap'

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(Number(value)))

export default class OutputStatusBitmask extends React.Component {
  static propTypes = {
    value: PropTypes.number
  };

  render() {
    const {type, value, onChange} = this.props
    const outputStatus = value
    var N = 10; 
    const valves = Array.apply(null, {length: 32}).map(Number.call, Number)
    const valvesStatus = valves.map((v, i) => outputStatus & (1 << i))
    console.log('outputStatusBitmaskInput', valves, valvesStatus)
    return (
      <div>
        <h2>{type.title} ({value})</h2>
        <div className={css.valves}>
          {
            valvesStatus.map((v, i) => {
              return (
                <div className={v === 0 ? css.closedValve : css.openValve} key={i}>
                  {i + 1}: {v === 0 ? 'closed' : 'open'} ({v})
                </div>
              )
            })
          }
        </div>
        <HeidrunMap outputStatus={value} />
      </div>
    )
  }
}