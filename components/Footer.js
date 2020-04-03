import React from 'react'
import { Button, Card, Row } from '@startupjs/ui'
import { observer, useLocal, useQuery } from 'startupjs'

export default observer(() => {
  let [todosFilter = {}, $todosFilter] = useLocal('_session.todos.filter')
  let [totalTodos] = useQuery('todos', { $count: true })
  let [doneTodos] = useQuery('todos', { $count: true, isDone: true })
  let activeTodos = totalTodos - doneTodos
  const onFilter = (f = {}) => {
    $todosFilter.set(f)
  }
  const { isDone } = todosFilter

  return (
    <Card level={3} style={{ margin: 2 }}>
      <Row align='center' vAlign='center'>
        <Button
          onPress={() => onFilter()}
          style={{ marginLeft: 10 }}
          variant={isDone === undefined ? 'outlined' : 'text'}
        >
          {`All (${totalTodos})`}
        </Button>
        <Button
          onPress={() => onFilter({ isDone: false })}
          style={{ marginLeft: 10 }}
          variant={isDone === false ? 'outlined' : 'text'}
        >
          {`Active (${activeTodos})`}
        </Button>
        <Button
          onPress={() => onFilter({ isDone: true })}
          style={{ marginLeft: 10 }}
          variant={isDone === true ? 'outlined' : 'text'}
        >
          {`Done (${doneTodos})`}
        </Button>
      </Row>
    </Card>
  )
})
