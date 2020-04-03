import { BASE_URL } from '@env'
import init from 'startupjs/init'
import React from 'react'
import { observer } from 'startupjs'
import { Footer, Header, List } from 'components'
import { SafeAreaView } from 'react-native'
import orm from './model'
import './Root.styl'

init({ baseUrl: BASE_URL, orm })

export default observer(function Root () {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <List />
      <Footer />
    </SafeAreaView>
  )
})
