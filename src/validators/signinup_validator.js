import { action } from 'mobx'
import { appState } from '../stores/app_state'
import BaseValidator from './base_validator'

export default class SignInUpValidator extends BaseValidator{
  static next(action) {
    if (action.next != null) {
      action.next(action)
    }
  }

  @action
  init(action) {
    const state = appState.formSignInUp
    state.email.init()
    state.password.init()
    state.confirmPassword.init()
    state.name.init()
    state.error = '';
    state.isError = false;
  }

  @action
  validateEmail(action) {
    // simulate a called to the backend.
    setTimeout( function(obj) {
      const state = appState.formSignInUp
      const field = state.email
      obj.validRequired(state, field)
      obj.validType(state, field)
      SignInUpValidator.next(action)
    }, 100, this)
  }

  @action
  validatePassword(action) {
    const state = appState.formSignInUp
    this.validRequired(state, state.password)
    SignInUpValidator.next(action)
  }

  @action
  validateConfirmPassword(action) {
    const state = appState.formSignInUp
    const field = state.confirmPassword
    this.validRequired(state, field)

    if (state.password.value != field.value) {
      field.error += (field.error !== '' ? ', ' : '') + 'Both passwords are not equal'
      state.isError = true
    }
    SignInUpValidator.next(action)
  }

  @action
  validateName(action) {
    const state = appState.formSignInUp
    this.validRequired(state, state.name)
    SignInUpValidator.next(action)
  }
}
export let signInUpValidator = new SignInUpValidator()
