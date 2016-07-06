export class MockAuthService {
  signIn({ email, password }, next, err) {
    if (email === 'jyvinet@hotmail.ca' && password === 'test') {
      next('token', 'Jean-Yves')
    } else {
      err('Unauthorized');
    }
  }

  signUp({ email, password, name }, next, err) {
    if (email === 'jyvinet@hotmail.ca' && password === 'test') {
      next('token', 'Jean-Yves') 
    } else {
      err('Unauthorized');
    }
  }

  setAuthorizations(next, err) {
    next(render, 'token')
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