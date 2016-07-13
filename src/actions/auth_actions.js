import { dispatch } from '../resolvers/dispatcher'
import AuthService from '../services/auth_service';

export let authPrefixType = "auth_"

export let authTypes = {
  authSetAuthorizations   : authPrefixType + 'SetAuthorizations',
  authSignIn              : authPrefixType + 'SignIn',
  authSignUp              : authPrefixType + 'SignUp',
  authSignOut             : authPrefixType + 'SignOut',
  authCheckToken          : authPrefixType + 'CheckToken',
  authError               : authPrefixType + 'Error'
}

const t = authTypes

// must use static method to pass them as callback
export default class AuthActions {
  static authCheckToken() {
    dispatch( {
      type: t.authCheckToken
    })
  }

  static authSetAuthorizations() {
    dispatch( {
      type: t.authSetAuthorizations,
      payload: function() {
        const service = AuthService.getInstance()
        service.setAuthorizations(AuthActions._authSetAuthorizations , AuthActions.authError)
      }
    })
  }

  // called from service
  static _authSetAuthorizations(authorizations) {
    dispatch( {
      type: t.authSetAuthorizations,
      payload: authorizations
    })
  }

  static authSignIn(email, password) {
    dispatch( {
      type: t.authSignIn,
      payload: function() {
        const service = AuthService.getInstance()
        service.signIn({ email, password }, AuthActions._authSignIn, AuthActions.authError)
      }
    })
  }

  // called from service
  static _authSignIn(token, name) {
    console.log('next 2')
    dispatch( {
      type: t.authSignIn,
      payload: { token, name }
    })
  }

  static authSignUp(email, password, name) {
    dispatch( {
      type: t.authSignUp,
      payload: function() {
        const service = AuthService.getInstance()
        service.signUp({ email, password, name }, AuthActions._authSignUp, AuthActions.authError)
      }
    })
  }

  // called from service
  static _authSignUp(token, name) {
    dispatch( {
      type: t.authSignUp,
      payload: { token, name }
    })
  }

    // called from service
  static authSignOut() {
    dispatch( {
      type: t.authSignOut
    })
  }

  static authError(error) {
    dispatch( {
      type: t.authError,
      payload : error
    })
  }
}
