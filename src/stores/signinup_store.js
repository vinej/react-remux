 import { action } from 'mobx'
import { appState } from './app_state'

export default class SignInUpStore {
  static next(action) {
    if (action.next != null) {
      action.next(action)
    }
  }

  @action
  validateEmail(action) {
    // simulate a called to the backend.
    setTimeout( function() {
      const state = appState.signInUp
      state.emailError = ''
      if ( state.email === '') {
        state.emailError = 'Email is required'
        state.isError = true
      }
      SignInUpStore.next(action)
    }, 2000)
  }

  @action
  validatePassword(action) {
    const state = appState.signInUp
    state.passwordError = ''
    if ( state.password === '') {
      state.passwordError = 'Password is required'
      state.isError = true
    }
    SignInUpStore.next(action)
  }

  @action
  validateConfirmPassword(action) {
    const state = appState.signInUp
    state.confirmPasswordError = ''
    if ( state.confirmPassword === '') {
      state.confirmPasswordError = 'ConfirmPassword is required'
      state.isError = true
    }

    if (state.password != state.confirmPassword) {
      state.confirmPasswordError = 'Both passwords are not equal'
      state.isError = true
    }
    SignInUpStore.next(action)
  }

  @action
  validateName(action) {
    const state = appState.signInUp
    state.nameError = ''
    if ( state.name === '') {
      state.nameError = 'Name is required'
      state.isError = true
    }
    SignInUpStore.next(action)
  }
}
export let signInUpStore = new SignInUpStore()
