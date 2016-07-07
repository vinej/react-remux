export class MockAuthService {
  signIn({ email, password }, next, err) {
    next('token', 'Jean-Yves')
  }

  signUp({ email, password, name }, next, err) {
    next('token', 'Jean-Yves') 
  }

  setAuthorizations(next, err) {
    next('token')
  }
}

export class MockTodoService {
  getAll(next, err) {
    let todos = [ { id:1, desc: 'test', done: false}, 
                  { id:2, desc: 'test 2', done: true}]
    // simulate a service call
    setTimeout( () => next(todos), 300 )
  }
}