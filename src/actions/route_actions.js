import { dispatch } from '../resolvers/dispatcher'

// same name of the type is the name of the function, but with a underscore. The pattern need that
export let routePrefixType = 'route_'

export let routeTypes = {
  routeAdd    : routePrefixType + 'Add',
}

const t = routeTypes

export default class RouteActions {
  static routeAdd(route) {
    dispatch( {
    	type: t.routeAdd,
      	payload: route
      }
    )
  }
}
