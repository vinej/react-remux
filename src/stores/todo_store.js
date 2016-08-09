import { action } from 'mobx'
import TodoActions from '../actions/todo_actions'
import { appState } from './app_state'

export default class TodoStore {
  constructor() {
    this.state = appState.todos
    this.on = TodoActions
  }

  set desc(desc) {
    this.state.desc = desc
  }

  get desc() {
    return this.state.desc
  }

  get todos() {
    return this.state.todos
  }

  setAll(todos) {
    this.state.todos = todos
  }

  setDesc(desc) {
    this.state.desc = desc
  }

  setDone( {todo, done }) {
    todo.done = done
  }

  delete(id) {
    const idx = this.state.todos.findIndex( (r) => r.id === id );
    this.state.todos.splice(idx,1);
  }

  @action
  init() {
    this.state.todos = []
    this.desc = ''
    this.count = 0
  }

  @action
  add() {
    if (this.state.desc === '') return
    this.state.todos.push( { id: this.state.count, desc: this.state.desc, done: false} );
    this.state.count = this.state.count + 1
    this.state.desc = ''
  }
}
export let todoStore = new TodoStore()
