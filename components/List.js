import React from 'react'
import { observer, useDoc, useLocal, useQuery } from 'startupjs'
import { ScrollView, TextInput } from 'react-native'
import { Button, Card, Row, Span } from '@startupjs/ui'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

const ItemEditing = observer(({ id, setEditId }) => {
  let [todo, $todo] = useDoc('todos', id)
  let [inputValue, setInputValue] = React.useState(todo.title)
  return (
    <Row>
      <TextInput
        autoFocus
        value={inputValue}
        onChangeText={setInputValue}
        onBlur={() => {
          $todo.set('title', inputValue)
          setEditId('')
        }}
        style={{ flex: 1, fontSize: 20 }}
      />
    </Row>
  )
})

export default observer(() => {
  let [filter = {}] = useLocal('_session.todos.filter')
  const [todos, $todos] = useQuery('todos', filter)
  const [editId, setEditId] = React.useState('')

  function toggleDone (id) {
    const $todo = $todos.at(id)
    $todo.toggleDone()
  }

  function deleteItem (id) {
    $todos.del(id)
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      {todos.map(todo => {
        return (
          <Card
            key={todo.id}
            level={2}
            style={{ marginHorizontal: 20, marginVertical: 2 }}
          >
            {editId === todo.id ? (
              <ItemEditing
                id={todo.id}
                setEditId={setEditId}
              />
            ) : (
              <Row>
                <Button
                  style={{
                    flex: 1,
                    justifyContent: 'flex-start'
                  }}
                  onPress={() => toggleDone(todo.id)}
                  variant='text'
                >
                  <Span
                    italic={todo.isDone}
                    style={{
                      textDecorationLine: todo.isDone ? 'line-through' : 'none'
                    }}
                  >
                    {todo.title}
                  </Span>
                </Button>
                <Button
                  icon={faPen}
                  onPress={() => setEditId(todo.id)}
                  style={{ marginLeft: 10 }}
                  variant='text'
                />
                <Button
                  icon={faTimes}
                  onPress={() => deleteItem(todo.id)}
                  shape='circle'
                  style={{ marginLeft: 10 }}
                  variant='text'
                />
              </Row>
            )}
          </Card>
        )
      })}
    </ScrollView>
  )
})
