import { dispatch } from '../resolvers/dispatcher'
import TodoService from '../services/todo_service';

// same name of the type is the name of the function, but with a underscore. The pattern need that
export let todoTypes = {
  todoAdd       : 'todo_Add',
  todoDelete    : 'todo_Delete',
  todoSetDesc   : 'todo_SetDesc',
  todoSetDone   : 'todo_SetDone',
  todoGetAll    : 'todo_GetAll'
}

const t = todoTypes

export default class TodoActions {

  static todoGetAll() {
    dispatch( {
      type: t.todoGetAll,
      payload: function() {
        const service = TodoService.getInstance()
        service.getAll(() => this._todoGetAll , () => this.todoError);
      }
    })
  }

  static _todoGetAll(todos) {
    dispatch( {
      type: t.todoGetAll,
      payload: todos
    })
  }

  static todoAdd() {
    dispatch( {
      type: t.todoAdd
    })
  }

  static todoDelete(id) {
    dispatch( {
      type: t.todoDelete,
      payload: id
    })
  }

  static todoSetDesc(desc) {
    dispatch( {
      type: t.todoSetDesc,
      payload: desc
    })
  }

  static todoSetDone(todo, done) {
    dispatch( {
      type: t.todoSetDone,
      payload: { todo, done }
    })
  }

  static todoError(error) {
    //
  }

}
export let todoActions = new TodoActions()

