import React from 'react'
import RequireAuth from './components/auth/require_auth'
import Todos from './components/todos'
import { todoStore } from './stores/todo_store'
import Welcome from './components/welcome'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import SignOut from './components/auth/signout'
import AuthActions from './actions/auth_actions'
import { routeStore } from './stores/route_store'
import { StateNavigator } from 'navigation'
import { appState } from './stores/app_state'
import { authStore } from './stores/auth_store'
import RouteActions from './actions/route_actions'

export let stateNavigator = new StateNavigator([
    {key: 'signin', route: 'signin', title: 'SignIn' },
    {key: 'signout', route: 'signout', title: 'SignOut' },
    {key: 'signup', route: 'signup', title: 'SignUp' },
    {key: 'todos', route: 'todos', title: 'Todos' },
    {key: 'welcome', route: '' }
]);

stateNavigator.states.signin.navigating = function(data, url, navigate) {
  console.log('signin navidating')
  if (authStore.isAuthenticated() == true) {
    AuthActions.authSignOut()
  }
  navigate()
};

const routeSignIn =   { id: 'signin', 
                        component : () => <SignIn store={ appState.signInUp } />,
                        display : 'block' 
                      }
stateNavigator.states.signin.navigated = function(data, url, navigate) {
  RouteActions.routeAdd( routeSignIn )
};

stateNavigator.states.signup.navigating = function(data, url, navigate) {
  if (authStore.isAuthenticated() == true) {
    AuthActions.authSignOut()
  }
  navigate()
};

const routeSignUp =  { id: 'signup', 
                      component : () => <SignUp store={ appState.signInUp } />,
                      display : 'block' 
                    } 
stateNavigator.states.signup.navigated = function(data, url, navigate) {
  RouteActions.routeAdd( routeSignUp)
};

stateNavigator.states.signout.navigating = function(data, url, navigate) {
  if (authStore.isAuthenticated() == true) {
    AuthActions.authSignOut()
  }
  navigate({data})
};

const routeSignOut =  { id: 'signout', 
                        component : () => <SignOut />,
                        display : 'block' 
                      }
stateNavigator.states.signout.navigated = function(data, url, navigate) {
  RouteActions.routeAdd( routeSignOut )
};

stateNavigator.states.todos.navigating = function(data, url, navigate) {
  if (authStore.isAuthenticated() == false) {
    stateNavigator.navigate('signin')
    return
  }
  navigate()
};

const routeTodo = { id: 'todos', 
                  component : () => <Todos store={ todoStore } />,
                  display : 'block' 
                }
stateNavigator.states.todos.navigated = function(data, url, navigate) {
  RouteActions.routeAdd( routeTodo )
};

// stateNavigator.states.welcome.navigating = function(data, url, navigate) {
//   navigate({data})
//   AuthActions.authCheckToken(false)  
// };
const routeWelcome =  {  id: 'welcome', 
                        component : () => <Welcome />,
                        display : 'block' 
                      }
stateNavigator.states.welcome.navigated = function(data, url, navigate) {
  RouteActions.routeAdd( routeWelcome )
};
