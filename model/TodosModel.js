import { BaseModel } from 'startupjs/orm'

export default class TodosModel extends BaseModel {
  addItem (value) {
    const title = value.trim()
    if (title) {
      this.add({
        title: value.trim(),
        isDone: false
      })
    }
  }
}
