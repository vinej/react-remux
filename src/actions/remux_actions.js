import { dispatch } from '../resolvers/dispatcher'

// same name of the type is the name of the function, but with a underscore. The pattern need that
export let remuxPrefixType = 'remux_'

export let remuxTypes = {
  remuxWait  : remuxPrefixType + 'Wait'
}

const t = remuxTypes

// must use static method to pass them as callback
export default class RemuxActions {
  static remuxWait(isSet) {
    dispatch( {
      type: t.remuxWait,
      payload: isSet
    })
  }
}
