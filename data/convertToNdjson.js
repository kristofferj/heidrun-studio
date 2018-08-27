const jsonQuery = require('json-query')
const styleguide = require('./styleguide.json')
const ndjson = require('ndjson')
const fs = require('fs');
const {each, omit} = require('lodash')

const CATEGORIES_OUTPUT = './categories.ndjson'
const SUB_CATEGORIES_OUTPUT = './subCategories.ndjson'

const classes = styleguide.styleguide.class

const categories = []
const ndJsonCategories = ndjson.serialize()
const ndJsonSubCategories = ndjson.serialize()
let savedCategories = 0

fs.writeFile(CATEGORIES_OUTPUT, '', err => {
  if(err) {
      return console.log(err);
  }
  console.log(CATEGORIES_OUTPUT + ' Cleared…');
}) 

fs.writeFile(SUB_CATEGORIES_OUTPUT, '', err => {
  if(err) {
      return console.log(err);
  }
  console.log(SUB_CATEGORIES_OUTPUT + ' Cleared…');
})

ndJsonCategories.on('data', line => {
  fs.appendFile(CATEGORIES_OUTPUT, line, err => {
    if (err) {
      return console.error(err);
    }
  })
})

ndJsonSubCategories.on('data', line => {
  fs.appendFile(SUB_CATEGORIES_OUTPUT, line, err => {
    if (err) {
      return console.error(err);
    }
  })
})


each(classes, type => {
  const BJCPClass = type.type

  // Import categories
  each(type.category, category => {
    const BJCPCategoryId = `BJCP-Category-${category.id}`
    ndJsonCategories.write({
      _type: 'BJCP-Category',
      _id: BJCPCategoryId,
      BJCPClass,
      ...omit(category, 'subcategory')
    })
    each(category.subcategory, sub => {
      const BJCPSubCategoryId = `BJCP-Sub-Category-${sub.id}`
      ndJsonSubCategories.write({
        _type: 'BJCP-Sub-Category',
        category: {
          _type: 'reference',
          _ref: BJCPCategoryId
        },
        _id: BJCPSubCategoryId,
        ...sub
      })
    })
  })
});

ndJsonCategories.end(test => {
  console.log('Categories', savedCategories)
})

ndJsonSubCategories.end(() => {
  console.log('sub finsihed')
})





