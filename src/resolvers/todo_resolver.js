import { todoStore } from '../stores/todo_store'
import { todoTypes, todoPrefixType  } from '../actions/todo_actions'
import { authTypes  } from '../actions/auth_actions'

export default function(action, next) {

  if (  todoPrefixType !== action.prefixType && 
        action.type != authTypes.authSignOut ) {
    return next(null, action);
  }

  if (action.type == authTypes.authSignOut) {
    todoStore.init()
    return next(null, action);
  }

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
