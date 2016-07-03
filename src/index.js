import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory, IndexRoute } from 'react-router'
import Todos from './components/todos'
import App from './components/app'
import { Welcome } from './components/welcome'
import { todoStore } from './stores/todo_store'

require('./style.css')

var todos = () => <Todos store={ todoStore } />

ReactDOM.render(
  (
    <Router history={browserHistory} >
      <Route path="/" component={ App } >
        <IndexRoute component={Welcome} />
        <Route path="/todos" component={ todos } />
        <Route path="/welcome" component={ Welcome } />
      </Route>
    </Router>
  ), document.getElementById("app")
)