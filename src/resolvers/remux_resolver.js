import { remuxStore } from '../stores/remux_store'
import { remuxTypes, remuxPrefixType  } from '../actions/remux_actions'

export default function(action, next) {

  if (remuxPrefixType !== action.prefixType) {
    return next(null, action);
  }

  const t = remuxTypes
  switch(action.type) {
    case t.remuxWait:
      remuxStore.wait(action.payload)
      break;
  }
  return next(null, action);
}
