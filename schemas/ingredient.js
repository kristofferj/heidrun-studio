export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      name: 'ingredient',
      title: 'Ingredient',
      type: 'reference',
      to: [
        {type: 'hop'},
        {type: 'fermentable'}
      ]
    },
    {
      name: 'amount',
      title: 'Amount (kg)',
      type: 'number'
    }
  ]
}