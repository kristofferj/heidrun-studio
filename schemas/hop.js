export default {
  name: 'hop',
  title: 'Hop',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'origin',
      title: 'Origin',
      type: 'string'
    },
    {
      name: 'hopType',
      title: 'Hop type',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: ['Bittering', 'Aroma', 'Bittering and Aroma']
          }
          
        },
        {
          name: 'form',
          title: 'Form',
          type: 'string',
          options: {
            list: ['Pellet', 'Plug', 'Leaf', 'Hop extract (CO2)', 'Extract (Isomerized)']
          }
        }
      ]
    },
    {
      name: 'acid',
      title: 'Percent acid',
      type: 'object',
      fields: [
        {
          name: 'alphaAcid',
          title: 'Alpha acid',
          type: 'number'
        },
        {
          name: 'betaAcid',
          title: 'Beta acid',
          type: 'number'
        }
      ]
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    }
  ]
}
