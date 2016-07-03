import { todoStore } from '../stores/todo_store'
import { todoAddType, todoDeleteType, todoSetDescType } from '../actions/todo_actions'

export default function(action, next) {
  switch(action.type) {
    case todoAddType :
      todoStore.add()
      break;
    case todoDeleteType :
      todoStore.delete(action.payload)
      break;
    case todoSetDescType :
      todoStore.setDesc(action.payload)
      break;
  }
  return next(null, action);
}