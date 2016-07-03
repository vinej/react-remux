// same name of the type is the name of the function, but with a underscore. The pattern need that
export let todoAddType= 'todo_Add'
export function todoAdd() {
  return {
    type: todoAddType   
  }
}

export let todoDeleteType= 'todo_Delete'
export function todoDelete(id) {
  return {
    type: todoDeleteType,
    payload: id
  }
}

export let todoSetDescType= 'todo_SetDesc'
export function todoSetDesc(desc) {
  return {
    type: todoSetDescType,
    payload: desc
  }
}

