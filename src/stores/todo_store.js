import React from 'react'
import { observable } from 'mobx'
import { todoActions } from '../actions/todo_actions'

export const todoShape = {
  id : React.PropTypes.number,
  desc : React.PropTypes.string,
  done : React.PropTypes.bool
}

export default class TodoStore {
  @observable todos = []
  @observable desc

  constructor() {
    this.on = todoActions
    this._count = 3
    this.desc = ''
    // add somes todos
    this.todos.push( { id:1, desc: 'test', done: false} );
    this.todos.push( { id:2, desc: 'test2', done: true} );
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