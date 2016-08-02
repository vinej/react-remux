import { dispatch } from '../resolvers/dispatcher'

export let signInUpPrefixType = "signInUpValidate_"

export let signInUpTypes = {
  signInUpValidateEmail             : signInUpPrefixType + 'Email',
  signInUpValidatePassword          : signInUpPrefixType + 'Password',
  signInUpValidateConfirmPassword   : signInUpPrefixType + 'ConfirmPassword',
  signInUpValidateName              : signInUpPrefixType + 'Name',
}

const t = signInUpTypes

// must use static method to pass them as callback
export default class signInUpActions {
  static validateEmail() {
    dispatch( signInUpActions._validateEmail() )
  }

  // need it for validation
  static _validateEmail() {
    return {
      type: t.signInUpValidateEmail
    }
  }

  static validatePassword() {
    dispatch( signInUpActions._validatePassword() )
  }

  static _validatePassword() {
    return {
      type: t.signInUpValidatePassword
    }
  }

  static validateConfirmPassword() {
    dispatch( signInUpActions._validateConfirmPassword() )
  }

  static _validateConfirmPassword() {
    return {
      type: t.signInUpValidateConfirmPassword
    }
  }

  static validateName() {
    dispatch( signInUpActions._validateName() )
  }

  static _validateName() {
    return {
      type: t.signInUpValidateName
    }
  }
}
