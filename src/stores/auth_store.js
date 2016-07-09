import { action } from 'mobx'
import AuthActions from '../actions/auth_actions'
import RefRoutes from '../ref_routes'
import { appState } from './app_state'

export default class AuthStore {
  constructor() {
    this.state = appState.user
  }

  isActionAvailable(actiontype) {
    return true
    // if (actiontype.endsWith("_")) {
    //   actiontype = actiontype.substr(0, actiontype.length - 1);
    // }
    // return this.actions.indexOf(actiontype) > -1
  }

  getError() {
    return this.state.errorMessage
  }

  @action
  setAuthorizations(authorizations) {
    this.state.isAutorizationInit = true
    //this.authorizations = authorizations
    RefRoutes.routeTodo()
  }

  isAuthenticated() {
    return this.state.authenticated
  }

  @action
  checkToken() {
    const token = localStorage.getItem('remux-token')
    if (token != null && token != '') {
      const name = localStorage.getItem('remux-name')
      this.state.authenticated = true
      this.state.name = name
      this.state.errorMessage = ''
      AuthActions.authSetAuthorizations()
    } else {
      this.state.authenticated = false
      this.state.name = ''
      this.state.errorMessage = ''
      RefRoutes.routeSignIn()
    }
  }

  @action
  signInOrUp(token, name) {
    localStorage.setItem('remux-token', token);
    localStorage.setItem('remux-name', name);
    this.state.authenticated = true;
    this.state.name = name;
    this.state.errorMessage = '';
    AuthActions.authSetAuthorizations()
  }

  @action
  signOut() {
    localStorage.removeItem('remux-token');
    localStorage.removeItem('remux-name');
    this.state.authenticated = false;
    this.state.name = '';
    this.state.errorMessage = '';
  }

  authError(error) {
    console.log(error)
  }
}
export let authStore = new AuthStore()
