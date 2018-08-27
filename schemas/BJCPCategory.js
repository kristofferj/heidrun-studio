export default {
  name: 'BJCP-Category',
  title: 'BJCP Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'BJCPClass',
      title: 'BJCP Class',
      type: 'string',
      options: {
        list: ['beer', 'mead', 'cider']
      }
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    },
    {
      name: 'id',
      title: 'BJCP id',
      type: 'string'
    },
    {
      name: 'revision',
      title: 'Revision',
      type: 'object',
      fields: [
        // {
        //   name: '$t',
        //   title: '$t',
        //   type: 'string'
        // },
        {
          name: 'number',
          title: 'number',
          type: 'string'
        }
      ]
    }
  ]
}
