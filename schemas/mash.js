export default {
  name: 'mash',
  title: 'Mash',
  type: 'document',
  fields: [
    {
      name: 'mashName',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{
        name: 'mashStep',
        title: 'Step',
        type: 'object',
        fieldsets: [
          {name: 'step', title: 'Mash step'},
          {name: 'infusion', title: 'Infusion'}
        ],
        options: {
          columns: 2
        },
        fields: [
          {
            title: 'Step name',
            name: 'name',
            type: 'string'
          },
          {
            title: 'Type',
            name: 'type',
            type: 'string',
            options: {
              list: ['Infusion', 'Decoction', 'Temperature']
            }
          },
          {
            title: 'Step temperature',
            name: 'stepTemp',
            type: 'number',
            fieldset: 'step'
          },
          {
            title: 'Step rise',
            name: 'stepRise',
            type: 'number',
            fieldset: 'step'
          },
          {
            title: 'Rise time',
            name: 'riseTime',
            type: 'number',
            fieldset: 'step'
          },
          {
            title: 'Water to add',
            name: 'addWater',
            type: 'number',
            fieldset: 'infusion'
          },
          {
            title: 'Water/grain ratio',
            name: 'waterGrainRatio',
            type: 'number',
            fieldset: 'infusion'
          },
          {
            title: 'Infusion temperature',
            name: 'infusionTemperature',
            type: 'number',
            fieldset: 'infusion'
          }
        ]
      }]
    }
  ]
}