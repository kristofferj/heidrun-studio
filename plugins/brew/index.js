import React from 'react'
import {route} from 'part:@sanity/base/router'
import BrewTool from './BrewTool'
import BrewToolIcon from './BrewToolIcon'

export default {
  title: 'Brew',
  name: 'brew',
  router: route('/:selectedDocumentId'),
  icon: BrewToolIcon,
  component: BrewTool
}
