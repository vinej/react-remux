import { routeStore } from '../stores/route_store'
import { routeTypes, routePrefixType  } from '../actions/route_actions'

export default function(action, next) {
  if (routePrefixType !== action.prefixType) {
    return next(null, action);
  }

  const t = routeTypes

  switch(action.type) {
    case t.routeAdd :
      routeStore.add(action.payload)
      break;
  }
  return next(null, action);
}
