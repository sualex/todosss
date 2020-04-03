import { BaseModel } from 'startupjs/orm'

export default class TodoModel extends BaseModel {
  toggleDone () {
    const isDone = this.get('isDone')
    this.set('isDone', !isDone)
  }
}
