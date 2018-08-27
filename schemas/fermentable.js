import React from 'react'
const Brauhaus = require('brauhaus')

export default {
  name: 'fermentable',
  title: 'Fermentable',
  type: 'document',
  fieldsets: [
    {name: 'properties', title: 'Properties'},
    {name: 'yield', title: 'Yield'}
  ],
  preview: {
    select: {
      title: 'name',
      origin: 'origin',
      supplier: 'supplier',
      color: 'color'
    },
    prepare: (value) => {
      return {
        title: value.title,
        subtitle: `${value.supplier}, ${value.origin}`,
        media: (dimensions) => {
          return (
            <span style={{height: '100%', width: '100%', backgroundColor: Brauhaus.srmToCss(Brauhaus.ebcToSrm(value.color))}} />
          )
        }
      }
    }
  },
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
      name: 'supplier',
      title: 'Supplier',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Grain', 'Sugar', 'Adjunct', 'Dry Extract']
      }
    },
    {
      name: 'color',
      title: 'Color',
      description: 'EBC',
      type: 'number',
      fieldset: 'properties'
    },
    {
      name: 'recommendMash',
      title: 'Recommend Mash',
      type: 'boolean',
      fieldset: 'properties'
    },
    {
      name: 'addAfterBoil',
      title: 'Add after boil',
      type: 'boolean',
      fieldset: 'properties'
    },
    {
      name: 'fermentable',
      title: 'Fermentable',
      type: 'boolean',
      fieldset: 'properties'
    },
    {
      name: 'potential',
      title: 'Potential',
      description: 'SG',
      type: 'number',
      fieldset: 'yield'
    },
    {
      name: 'yield',
      title: 'yield',
      description: '%',
      type: 'number',
      fieldset: 'yield'
    },
    {
      name: 'moisture',
      title: 'Moisture',
      description: '%',
      type: 'number',
      fieldset: 'properties'
    },
    {
      name: 'diastaticPower',
      title: 'Diastatic power',
      description: 'Lintner',
      type: 'number',
      fieldset: 'properties'
    },
    {
      name: 'protein',
      title: 'Protein',
      description: '%',
      type: 'number',
      fieldset: 'properties'
    },
    {
      name: 'coarseFineDiff',
      title: 'Coarse/Fine Difference',
      description: '%',
      type: 'number',
      fieldset: 'yield'
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    }
  ]
}
