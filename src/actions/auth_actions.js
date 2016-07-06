import AuthService from '../services/auth_service';
import { dispatch } from '../resolvers/dispatcher'

export let authTypes = {
  authSetAuthorizations   : 'auth_SetAuthorizations',
  authSignIn              : 'auth_SignIn',
  authSignUp              : 'auth_SignUp',
  authSignOut             : 'auth_SignOut',
  authCheckToken          : 'auth_CheckToken',
  authError               : 'auth_Error'
}

const t = authTypes

class AuthActions {
  authCheckToken() {
    dispatch( {
      type: t.authCheckToken,
    })
  }

  authSetAuthorizations() {
    dispatch( {
      type: t.authSetAuthorizations,
      payload: function() {
        const service = AuthService.getInstance()
        service.setAuthorizations(() =>this._authSetAuthorizations , () => this.authError);
      }
    })
  }

  // called from service
  _authSetAuthorizations(authorizations) {
    dispatch( {
      type: t.authSetAuthorizations,
      payload: authorizations
    })
  }

  authSignIn(email, password) {
    dispatch( {
      type: t.authSignIn,
      payload: function() {
        const service = AuthService.getInstance()
        service.signIn({ email, password }, () => this._authSignIn, () => this.authError)
      }
    })
  }

  // called from service
  _authSignIn(token, name) {
    dispatch( {
      type: t.authSignIn,
      payload: { token, name }
    })
  }

  authSignUp(email, password, name) {
    dispatch( {
      type: t.authSignUp,
      payload: function() {
        const service = AuthService.getInstance()
        service.signUp({ email, password, name }, () => this._authSignUp, () => this.authError)
      }
    })
  }

  // called from service
  _authSignUp(token, name) {
    dispatch( {
      type: t.authSignUp,
      payload: { token, name }
    })
  }

    // called from service
  authSignOut() {
    dispatch( {
      type: t.authSignOut
    })
  }

  authError(error) {
    dispatch( {
      type: t.authError,
      payload : error
    })
  }
}
export let authActions = new AuthActions()
