export default {
  name: 'stats',
  type: 'object',
  fields: [
    {
      name: 'abv',
      title: 'ABV',
      type: 'object',
      fields: [
        {name: 'flexible', type: 'boolean'},
        {name: 'high', type: 'number'},
        {name: 'low', type: 'number'}
      ]
    },
    {
      name: 'fg',
      title: 'Final Gravity',
      type: 'object',
      fields: [
        {name: 'flexible', type: 'boolean'},
        {name: 'high', type: 'number'},
        {name: 'low', type: 'number'}
      ]
    },
    {
      name: 'og',
      title: 'Original Gravity',
      type: 'object',
      fields: [
        {name: 'flexible', type: 'boolean'},
        {name: 'high', type: 'number'},
        {name: 'low', type: 'number'}
      ]
    },
    {
      name: 'srm',
      title: 'Beer color in SRM',
      type: 'object',
      fields: [
        {name: 'flexible', type: 'boolean'},
        {name: 'high', type: 'number'},
        {name: 'low', type: 'number'}
      ]
    },
    {
      name: 'ibu',
      title: 'Internation Bittering Units (IBU)',
      type: 'object',
      fields: [
        {name: 'flexible', type: 'boolean'},
        {name: 'high', type: 'number'},
        {name: 'low', type: 'number'}
      ]
    }
  ]
}
