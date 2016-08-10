import { action } from 'mobx'
import { appState } from '../stores/app_state'

export default class SignInUpValidator {
  static next(action) {
    if (action.next != null) {
      action.next(action)
    }
  }

  @action
  init(action) {
    const state = appState.signInUp
    //state.email = '';
    state.email.error = '';
    state.password.value = '';
    state.password.error = '';
    //state.name = '';
    state.name.error = '';
    state.confirmPassword.value = '';
    state.confirmPassword.error = '';
    state.error = '';
    state.isError = false;
  }

  @action
  validateEmail(action) {
    // simulate a called to the backend.
    setTimeout( function() {
      const state = appState.signInUp
      state.email.error = ''
      if ( state.email.value === '') {
        state.email.error = 'Email is required'
        state.isError = true
      }
      SignInUpValidator.next(action)
    }, 100)
  }

  @action
  validatePassword(action) {
    const state = appState.signInUp
    state.password.error = ''
    if ( state.password.value === '') {
      state.password.error = 'Password is required'
      state.isError = true
    }
    SignInUpValidator.next(action)
  }

  @action
  validateConfirmPassword(action) {
    const state = appState.signInUp
    state.confirmPassword.error = ''
    if ( state.confirmPassword.value === '') {
      state.confirmPassword.error = 'ConfirmPassword is required'
      state.isError = true
    }

    if (state.password.value != state.confirmPassword.value) {
      state.confirmPassword.error = 'Both passwords are not equal'
      state.isError = true
    }
    SignInUpValidator.next(action)
  }

  @action
  validateName(action) {
    const state = appState.signInUp
    state.name.error = ''
    if ( state.name.value === '') {
      state.name.error = 'Name is required'
      state.isError = true
    }
    SignInUpValidator.next(action)
  }
}
export let signInUpValidator = new SignInUpValidator()
