import { observable } from 'mobx'
import TodoActions from '../actions/todo_actions'

export default class TodoStore {
  @observable todos = []
  @observable desc

  constructor() {
    this.on = TodoActions
    this._count = 3
    this.desc = ''
  }

  set desc(desc) {
    this.desc = desc
  }

  get desc() {
    return this.desc
  }

  get todos() {
    return this.todos
  }

  setAll(todos) {
    this.todos = todos
  }

  setDesc(desc) {
    this.desc = desc
  }

  setDone( {todo, done }) {
    todo.done = done
  }

  delete(id) {
    const idx = this.todos.findIndex( (r) => r.id === id );
    this.todos.splice(idx,1);
  }

  add() {
    if (this.desc === '') return
    this.todos.push( { id: this._count, desc: this.desc, done: false} );
    this._count = this._count + 1
    this.desc = ''
  }
}
export let todoStore = new TodoStore()
