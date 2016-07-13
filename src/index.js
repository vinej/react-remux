import React from 'react'
import ReactDOM from 'react-dom'
import { MockAuthService, MockTodoService } from './services/mock_services'
import AuthService from './services/auth_service'
import TodoService from './services/todo_service'
import AuthActions from './actions/auth_actions'
import App from './components/app'

import { stateNavigator } from './navigation'

require('./style.css')

// mock the services to do some tests
AuthService.setInstance( new MockAuthService() )
TodoService.setInstance( new MockTodoService() )

stateNavigator.start();

var app = <App stateNavigator={stateNavigator} />

ReactDOM.render( app, document.getElementById("app"))

AuthActions.authCheckToken()


