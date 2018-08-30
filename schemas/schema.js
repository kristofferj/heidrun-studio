import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import recipe from './recipe'
import hop from './hop'
import fermentable from './fermentable'
import waterProfile from './waterProfile'
import brew from './brew'
import brewLog from './brewLog'
import ingredient from './ingredient'
import logItem from './logItem'
import yeast from './yeast'
import mash from './mash'
import command from './command'
import BJCPCategory from './BJCPCategory'
import BJCPSubCategory from './BJCPSubCategory'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    brew,
    brewLog,
    recipe,
    blockContent,
    hop,
    fermentable,
    waterProfile,
    ingredient,
    yeast,
    mash,
    BJCPCategory,
    BJCPSubCategory,
    logItem,
    command
  ])
})
