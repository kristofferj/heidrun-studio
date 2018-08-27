const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'k7qicdza',
  dataset: 'production',
  useCdn: false
})

export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'blockContent'
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{
        type: 'ingredient'
      }]
    },
    {
      name: 'mash',
      title: 'Mash',
      type: 'reference',
      to: [{
        type: 'mash'
      }]
    }
  ],

  preview: {
    select: {
      title: 'title',
      ingredients: '_id'
    },
    prepare: (source) => {
      
      const query = `*[_id == "${source._id}"] {ingredients[]{amount,ingredient->{color}}}`
      console.log(query)
      client.fetch(query).then(ingredients => {
        console.log('ingredients', ingredients)
      })
      return {
        title: source.title
      }
    }
  }
}
