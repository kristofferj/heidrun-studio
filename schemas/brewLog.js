export default {
  name: 'brewLog',
  title: 'Brew log',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Log title',
      name: 'title',
      type: 'string'
    },
    {
      name: 'brew',
      title: 'Brew',
      type: 'reference',
      to: [{
        type: 'brew'
      }]
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'blockContent'
    },
    {
      name: 'log',
      title: 'Log',
      type: 'array',
      of: [{
        type: 'logItem'
      }]
    }
  ],

  preview: {
    select: {
      title: 'title',
      brew: 'brew.title',
      log: 'log'
    },
    prepare: ({title, log, brew}) => {
      return {
        title: brew,
        subtitle: title
      }
    }
  }
}
