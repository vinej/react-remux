import { dispatch } from '../resolvers/dispatcher'
// same name of the type is the name of the function, but with a underscore. The pattern need that
export let todoTypes = {
  todoAdd       : 'todo_Add',
  todoDelete    : 'todo_Delete',
  todoSetDesc   : 'todo_SetDesc',
  todoSetDone   : 'todo_SetDone'
}

const t = todoTypes

class TodoActions {
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

}
export let todoActions = new TodoActions()

