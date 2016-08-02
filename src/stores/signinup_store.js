import { action } from 'mobx'
import { appState } from './app_state'

export default class SignInUpStore {
  constructor() {
    this.state = appState.signInUp
  }

  @action
  validateEmail() {
    this.state.emailError = ''
    if ( this.state.email === '') {
      this.state.emailError = 'Email is required'
      this.state.isError = true
    }
  }

  @action
  validatePassword() {
    this.state.passwordError = ''
    if ( this.state.password === '') {
      this.state.passwordError = 'Password is required'
      this.state.isError = true
    }
  }

  @action
  validateConformPassword() {
    this.state.confirmPasswordError = ''
    if ( this.state.confirmPassword === '') {
      this.state.confirmPasswordError = 'ConfirmPassword is required'
      this.state.isError = true
    }

    if (this.state.password != this.state.confirmPassword) {
      this.state.confirmPasswordError = 'Both passwords are not equal'
      this.state.isError = true
    }
  }

  @action
  validateName() {
    this.state.nameError = ''
    if ( this.state.name === '') {
      this.state.nameError = 'Name is required'
      this.state.isError = true
    }
  }
}
export let signInUpStore = new SignInUpStore()
