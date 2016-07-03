import { observable } from 'mobx'

class TodoStore {
  @observable todos = []
  @observable _desc

  constructor() {
    this._count = 3
    this._desc = ''
    // add somes todos
    this.todos.push( { id:1, desc: 'test', done: false} );
    this.todos.push( { id:2, desc: 'test2', done: true} );
  }

  set desc(desc) {
    this._desc = desc
  }

  get desc() {
    return this._desc
  }

  get todos() {
    return this.todos
  }

  setDesc(desc) {
    this._desc = desc
  }

  delete(id) {
    const idx = this.todos.findIndex( (r) => r.id === id );
    this.todos.splice(idx,1);
  }

  add() {
    if (this.desc === '') return
    this.todos.push( { id: this._count, desc: this._desc, done: false} );
    this._count = this._count + 1
    this._desc = ''
  }
}
export let todoStore = new TodoStore()