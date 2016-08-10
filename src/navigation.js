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
import SignInUpActions from './actions/signinup_actions'

export let stateNavigator = new StateNavigator([
    {key: 'signin',   route: 'signin',  init: SignInUpActions.init , component: <SignIn vstate={ appState.formSignInUp } /> },
    {key: 'signout',  route: 'signout', init: null ,component: <SignOut /> },
    {key: 'signup',   route: 'signup',  init: SignInUpActions.init, component: <SignUp vstate={ appState.formSignInUp } /> },
    {key: 'todos',    route: 'todos',   init: null, component: <Todos store={ todoStore } /> },
    {key: 'welcome',  route: '',        init: null, component : <Welcome /> }
]);

stateNavigator.onNavigate((oldState, state, data) => {
    if (checkNavigating(state) === false) {
      return
    }

    RouteActions.routeAdd({
        id: state.key,
        component: () => state.component,
        display: 'block',
        init: state.init
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

