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
    {key: 'signin',   route: 'signin',  component: <SignIn store={ appState.signInUp } /> },
    {key: 'signout',  route: 'signout', component: <SignOut /> },
    {key: 'signup',   route: 'signup',  component: <SignUp store={ appState.signInUp } /> },
    {key: 'todos',    route: 'todos',   component: <Todos store={ todoStore } /> },
    {key: 'welcome',  route: '',        component : <Welcome /> }
]);

stateNavigator.states.signin.navigating = function(data, url, navigate) {
  console.log('signin navidating')
  if (authStore.isAuthenticated() == true) {
    AuthActions.authSignOut()
  }
  navigate()
};

stateNavigator.onNavigate((oldState, state, data) => {
    console.log(oldState, state, data)
    if (checkNavigating(state) === false) {
      return
    }

    RouteActions.routeAdd({
        id: state.key,
        component: () => state.component,
        display: 'block'
    });
});

function checkNavigating(state) {
  if (state.key === 'signin' || state.key === 'signup' || state.key === 'signout') {
    if (authStore.isAuthenticated() === true) {
      AuthActions.authSignOut()
      return true
    }
  }

  if (state.key === 'todos') {
    if (authStore.isAuthenticated() === false) {
      stateNavigator.navigate('signin')
      return false
    }
  }
  return true
}

