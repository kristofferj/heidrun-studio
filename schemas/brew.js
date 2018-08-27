export default {
  name: 'brew',
  title: 'Brew',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'breweDate',
      title: 'Brewed at',
      type: 'datetime'
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'blockContent'
    },
    {
      name: 'recipe',
      title: 'Base Recipe',
      type: 'reference',
      to: [{
        type: 'recipe'
      }]
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
