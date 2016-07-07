import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory, IndexRoute } from 'react-router'
import Todos from './components/todos'
import App from './components/app'
import { Welcome } from './components/welcome'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import SignOut from './components/auth/signout'
import { todoStore } from './stores/todo_store'
import { MockAuthService, MockTodoService } from './services/mock_services'
import AuthService from './services/auth_service'
import TodoService from './services/todo_service'
import AuthActions from './actions/auth_actions'
import RequireAuth from './components/auth/require_auth'

require('./style.css')

// mock the services to do some tests
AuthService.setInstance( new MockAuthService() )
TodoService.setInstance( new MockTodoService() )
AuthActions.authCheckToken()

var todos = () => <Todos store={ todoStore } />

ReactDOM.render(
  (
    <Router history={browserHistory} >
      <Route path="/" component={ App } >
        <IndexRoute component={Welcome} />
        <Route path="/welcome" component={ Welcome } />
        <Route path="/todos" component={ RequireAuth(todos) } />
        <Route path="/signin" component={ SignIn } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/signout" component={ SignOut } />
      </Route>
    </Router>
  ), document.getElementById("app")
)