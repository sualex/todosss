import React from 'react'
import { Card, Row } from '@startupjs/ui'
import { TextInput } from 'react-native'
import { observer, useModel } from 'startupjs'
import config from 'config'

export default observer(function Header () {
  let [inputValue, setInputValue] = React.useState('')
  let $todos = useModel('todos')

  const add = () => {
    $todos.addItem(inputValue)
    setInputValue('')
  }
  return (
    <Card level={3} style={{ margin: 2 }}>
      <Row>
        <TextInput
          autoFocus
          placeholder='What needs to be done?'
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={add}
          placeholderTextColor={config.ui.colors.secondaryLighter}
          style={{ fontSize: 22, flex: 1 }}
        />
      </Row>
    </Card>
  )
})
