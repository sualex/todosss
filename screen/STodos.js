import React from 'react'
import './STodos.styl'
import { observer } from 'startupjs'
import {
  View
} from 'react-native'

import { List, Counters, TodoInput } from 'components'

export default observer(function Todos () {
  return pug`
    View
      TodoInput
      Counters
      List
  `
})
