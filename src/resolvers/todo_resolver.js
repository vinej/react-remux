import { todoStore } from '../stores/todo_store'
import { todoTypes  } from '../actions/todo_actions'

export default function(action, next) {
  const t = todoTypes
  switch(action.type) {
    case t.todoAdd :
      todoStore.add()
      break;
    case t.todoDelete :
      todoStore.delete(action.payload)
      break;
    case t.todoSetDesc :
      todoStore.setDesc(action.payload)
      break;
    case t.todoSetDone :
      todoStore.setDone(action.payload)
      break;
    case t.todoGetAll :
      todoStore.setAll(action.payload)
      break;
  }
  return next(null, action);
}