import { authStore } from '../stores/auth_store'
import { authTypes, authPrefixType  } from '../actions/auth_actions'

export default function(action, next) {

  if (authPrefixType !== action.prefixType) {
    return next(null, action);
  }

  const t = authTypes
  switch(action.type) {
    case t.authSetAuthorizations:
      authStore.setAuthorizations(action.payload)
      break;
    case t.authCheckToken:
      authStore.checkToken()
      break;
    case t.authSignIn:
    case t.authSignUp:
      authStore.signInOrUp(action.payload.token, action.payload.name)
      break;
    case t.authSignOut:
      authStore.signOut()
      break;
    case t.authError:
      authStore.authError(action.payload)
      break;
  }
  return next(null, action);
}
