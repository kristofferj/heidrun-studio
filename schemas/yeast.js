export default {
  name: 'yeast',
  title: 'Yeast',
  type: 'document',
  fieldsets: [
    {name: 'properties', title: 'Properties'},
    {name: 'notes', title: 'Notes'},
    {name: 'yeastCulture', title: 'Yeast Culture'},
    {name: 'fermentationRange', title: 'Fermentation Range'}
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'laboratory',
      title: 'Laboratory',
      type: 'string'
    },
    {
      name: 'productId',
      title: 'Product id',
      type: 'string'
    },
    {
      name: 'addToSecondary',
      title: 'Add to secondary',
      type: 'boolean'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Ale', 'Lager', 'Wine', 'Champagne', 'Wheat']
      }
    },
    {
      name: 'form',
      title: 'Form',
      type: 'string',
      options: {
        list: ['Liquid', 'Dry', 'Slant', 'Culture']
      }
    },
    {
      name: 'flocculation',
      title: 'Flocculation',
      type: 'string',
      options: {
        list: ['Low', 'Medium', 'High', 'Very High']
      }
    },
    {
      name: 'minAttenuation',
      title: 'Minimum attenuation',
      type: 'number',
      fieldset: 'fermentationRange'
    },
    {
      name: 'maxAttenuation',
      title: 'Maximum attenuation',
      type: 'number',
      fieldset: 'fermentationRange'
    },
    {
      name: 'minTemperature',
      title: 'Minimum Temperature',
      type: 'number',
      fieldset: 'fermentationRange'
    },
    {
      name: 'maxTemperature',
      title: 'Maximum Temperature',
      type: 'number',
      fieldset: 'fermentationRange'
    },
    {
      name: 'timesCultured',
      title: 'Times Cultured',
      type: 'string',
      fieldset: 'yeastCulture'
    },
    {
      name: 'maxReuse',
      title: 'Maximum times reused',
      type: 'string',
      fieldset: 'yeastCulture'
    },
    {
      name: 'bestFor',
      title: 'Best for',
      type: 'text'
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    }
  ]
}
