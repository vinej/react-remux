import { action } from 'mobx'
import { appState } from './app_state'

export default class RouteStore {
  constructor() {
    this.state = appState.routes
  }

  @action
  add(route) {
    let routes = this.state.routes;
    const idx = routes.findIndex( (r) => r.id === route.id );
    // new route
    if (idx === -1) {
      if (this.state.currentRoute !== -1) {
        routes[this.state.currentRoute].display = 'none'
      }
      routes.push(route)
      this.state.currentRoute = routes.length - 1;
    } else {
    // new route
      if (this.state.currentRoute !== -1) {
        routes[this.state.currentRoute].display = 'none'
      }
      this.state.currentRoute = idx
      routes[idx].display = 'block'
    }
  }
}
export let routeStore = new RouteStore()
