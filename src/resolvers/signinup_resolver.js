import { signInUpValidator } from '../validators/signinup_validator'
import { signInUpTypes, signInUpPrefixType  } from '../actions/signinup_actions'

export default function(action, next) {

  if (signInUpPrefixType !== action.prefixType) {
    return next(null, action);
  }

  const t = signInUpTypes
  switch(action.type) {
    case t.signInUpInit:
      signInUpValidator.init(action)
      break;
    case t.signInUpValidateEmail:
      signInUpValidator.validateEmail(action)
      break;
    case t.signInUpValidatePassword:
      signInUpValidator.validatePassword(action)
      break;
    case t.signInUpValidateConfirmPassword:
      signInUpValidator.validateConfirmPassword(action)
      break;
    case t.signInUpValidateName:
      signInUpValidator.validateName(action)
      break;
  }
  return next(null, action);
}
