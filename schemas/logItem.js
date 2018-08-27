import OutputStatusBitmask from '../plugins/OutputStatusBitmask'

const autoValveStatusDescriptor = [
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



export default {
  name: 'logItem',
  title: 'Log item',
  type: 'object',
  fieldsets: [
    { title: 'General', name: 'general', options: {collapsible: true, collapsed: true}},
    { title: 'HLT', name: 'HLT', options: {collapsible: true, collapsed: true}},
    { title: 'Mash', name: 'mash', options: {collapsible: true, collapsed: true}},
    { title: 'Kettle', name: 'kettle', options: {collapsible: true, collapsed: true}},
    { title: 'Chilling', name: 'chill', options: {collapsible: true, collapsed: true}},
    { title: 'Boiling', name: 'boil', options: {collapsible: true, collapsed: true}},
    { title: 'Aux', name: 'aux', options: {collapsible: true, collapsed: true}}
  ],
  fields: [
    { name: 'timestamp', type: 'datetime'},
    { name: 'responseCode', type: 'string', fieldset: 'general' },
    { name: 'alarmStatus', type: 'number', fieldset: 'general' },
    { title: 'AutoValve Status Bitmask', name: 'autoValveStatus', title: "Auto Valve Profile Status", type: 'number', fieldset: 'general' },
    { title: 'Active Valve Profiles Bitmask', name: 'profileStatus', type: 'number', fieldset: 'general' },
    { 
      title: 'Active Valve Outputs Bitmask',
      name: 'outputStatus',
      type: 'number',
      fieldset: 'general',
      inputComponent: OutputStatusBitmask
    },
    { name: 'HLT_Setpoint', type: 'number', fieldset: 'HLT'},
    { name: 'HLT_Temperature', type: 'number', fieldset: 'HLT' },
    { name: 'HLT_HeatPower', type: 'number', fieldset: 'HLT' },
    { name: 'HLT_TargetVolume', type: 'number', fieldset: 'HLT' },
    { name: 'HLT_FlowRate', type: 'number', fieldset: 'HLT' },
    { name: 'HLT_Volume', type: 'number', fieldset: 'HLT' },
    { name: 'Mash_Setpoint', type: 'number', fieldset: 'mash' },
    { name: 'Mash_Temperature', type: 'number', fieldset: 'mash' },
    { name: 'Mash_HeatPower', type: 'number', fieldset: 'mash' },
    { name: 'Mash_TargetVolume', type: 'number', fieldset: 'mash' },
    { name: 'Mash_Volume', type: 'number', fieldset: 'mash' },
    { name: 'Mash_FlowRate', type: 'number', fieldset: 'mash' },
    { name: 'Mash_TimerValue', type: 'number', fieldset: 'mash' },
    { name: 'Mash_TimerStatus', type: 'number', fieldset: 'mash' },
    { name: 'Kettle_Setpoint', type: 'number', fieldset: 'kettle' },
    { name: 'Kettle_Temperature', type: 'number', fieldset: 'kettle' },
    { name: 'Kettle_HeatPower', type: 'number', fieldset: 'kettle' },
    { name: 'Kettle_TargetVolume', type: 'number', fieldset: 'kettle' },
    { name: 'Kettle_Volume', type: 'number', fieldset: 'kettle' },
    { name: 'Kettle_FlowRate', type: 'number', fieldset: 'kettle' },
    { name: 'H2OIn_Temperature', type: 'number', fieldset: 'chill' },
    { name: 'H2OOut_Temperature', type: 'number', fieldset: 'chill' },
    { name: 'WortOut_Temperature', type: 'number', fieldset: 'chill' },
    { name: 'AUX1_Temperature', type: 'number', fieldset: 'aux' },
    { name: 'AUX2_Temperature', type: 'number', fieldset: 'aux' },
    { name: 'AUX3_Temperature', type: 'number', fieldset: 'aux' },
    { name: 'Boil_TimerValue', type: 'number', fieldset: 'boil' },
    { name: 'Boil_TimerStatus', type: 'number', fieldset: 'boil' },
    { name: 'Boil_ControlState', type: 'number', fieldset: 'boil' }
  ],
  preview: {
    select: {
      profileStatus: "profileStatus",
      HLT_Setpoint: "HLT_Setpoint",
      HLT_Temperature: "HLT_Temperature",
      Kettle_Setpoint: "Kettle_Setpoint",
      Kettle_Temperature: "Kettle_Temperature",
      Mash_Setpoint: "Mash_Setpoint",
      Mash_Temperature: "Mash_Temperature"
    },
    prepare: ({profileStatus, HLT_Setpoint, HLT_Temperature, Mash_Setpoint, Mash_Temperature, Kettle_Setpoint, Kettle_Temperature}) => {
      return {
        title: autoValveStatusDescriptor.filter((value, index) => profileStatus & (1 << index)).join(', '),
        subtitle: `HLT: ${HLT_Temperature/100}(${HLT_Setpoint/100})ºC Mash: ${Mash_Temperature/100}(${Mash_Temperature/100})ºC  Kettle: ${Mash_Temperature/100}(${Mash_Setpoint/100})ºC`
      }
    }
  }
}

// //                  "Program1_Step",
// //                  "Program1_Name",
// //                  "Program1_Number",
// //                  "Program2_Step",
// //                  "Program2_Name",
// //                  "Program2_Number"
// "Mash_Zone_Active_Program_Step",
// "Mash_Zone_Active_Program_Recipe",
// "Boil_Zone_Active_Program_Step",
// "Boil_Zone_Active_Program_Recipe"