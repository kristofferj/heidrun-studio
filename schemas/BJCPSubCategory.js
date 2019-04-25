import React from 'react'
const {srmToCss} = require('brauhaus')

export default {
  name: 'BJCP-Sub-Category',
  title: 'BJCP Sub Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{
        type: 'BJCP-Category'
      }]
    },
    {
      name: 'appearance', type: 'text', rows: 2
    },
    {
      name: 'aroma', type: 'text', rows: 2
    },
    {
      name: 'comments', type: 'text', rows: 2
    },
    {
      name: 'comparison', type: 'text', rows: 2
    },
    {
      name: 'entry_instructions', type: 'text', rows: 2
    },
    {
      name: 'examples', type: 'text', rows: 2
    },
    {
      name: 'flavor', type: 'text', rows: 2
    },
    {
      name: 'history', type: 'text', rows: 2
    },
    {
      name: 'id', type: 'string'
    },
    {
      name: 'impression', type: 'text', rows: 2
    },
    {
      name: 'ingredients', type: 'text', rows: 2
    },
    {
      name: 'mouthfeel', type: 'text', rows: 2
    },
    {
      name: 'tags', type: 'text', rows: 2
    },
    {
      name: 'stats',
      type: 'stats'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.name',
      srmLow: 'stats.srm.low',
      srmHigh: 'stats.srm.high'
    },
    prepare: (value) => {
      return {
        title: value.title,
        subtitle: value.subtitle,
        media: (dimensions) => {
          return (
            <span
              style={{
                height: '100%', 
                width: '100%', 
                background: `linear-gradient(${srmToCss(value.srmLow)}, ${srmToCss(value.srmHigh)})`
              }}
            />
          )
        }
      }
    }
  },
}
