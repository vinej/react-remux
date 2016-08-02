import { signInUpStore } from '../stores/signinup_store'
import { signInUpTypes, signInUpPrefixType  } from '../actions/signinup_actions'

export default function(action, next) {

  if (signInUpPrefixType !== action.prefixType) {
    return next(null, action);
  }

  const t = signInUpTypes
  switch(action.type) {
    case t.signInUpValidateEmail:
      signInUpStore.validateEmail()
      break;
    case t.signInUpValidatePassword:
      signInUpStore.validatePassword()
      break;
    case t.signInUpValidateConfirmPassword:
      signInUpStore.validatePassword()
      break;
    case t.signInUpValidateName:
      signInUpStore.validateName()
      break;
  }
  return next(null, action);
}
