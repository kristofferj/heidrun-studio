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
