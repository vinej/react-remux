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

class TodoActions {
  constructor() {
    //this._todoGetAll = this._todoGetAll.bind(this)
    //this.todoError = this.todoError.bind(this)
  }


  todoGetAll() {
    dispatch( {
      type: t.todoGetAll,
      payload: function() {
        const service = TodoService.getInstance()
        service.getAll(() => this._todoGetAll , () => this.todoError);
      }
    })
  }

  _todoGetAll(todos) {
    dispatch( {
      type: t.todoGetAll,
      payload: todos
    })
  }

  todoAdd() {
    dispatch( {
      type: t.todoAdd
    })
  }

  todoDelete(id) {
    dispatch( {
      type: t.todoDelete,
      payload: id
    })
  }

  todoSetDesc(desc) {
    dispatch( {
      type: t.todoSetDesc,
      payload: desc
    })
  }

  todoSetDone(todo, done) {
    dispatch( {
      type: t.todoSetDone,
      payload: { todo, done }
    })
  }

  todoError(error) {
    //
  }

}
export let todoActions = new TodoActions()

