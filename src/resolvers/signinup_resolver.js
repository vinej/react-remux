import { signInUpStore } from '../stores/signinup_store'
import { signInUpTypes, signInUpPrefixType  } from '../actions/signinup_actions'

export default function(action, next) {

  if (signInUpPrefixType !== action.prefixType) {
    return next(null, action);
  }

  const t = signInUpTypes
  switch(action.type) {
    case t.signInUpValidateEmail:
      signInUpStore.validateEmail(action)
      break;
    case t.signInUpValidatePassword:
      signInUpStore.validatePassword(action)
      break;
    case t.signInUpValidateConfirmPassword:
      signInUpStore.validateConfirmPassword(action)
      break;
    case t.signInUpValidateName:
      signInUpStore.validateName(action)
      break;
  }
  return next(null, action);
}
