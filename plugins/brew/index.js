import React from 'react'
import {route} from 'part:@sanity/base/router'
import BrewTool from './BrewTool'
import BrewToolIcon from './BrewToolIcon'
import FaBeer from 'react-icons/lib/fa/beer'

export default {
  title: 'Brew',
  name: 'brew',
  router: route('/:selectedDocumentId'),
  icon: FaBeer,
  component: BrewTool
}
