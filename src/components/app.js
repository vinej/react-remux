import React, { Component } from 'react'
import Header from './header'
import { Footer } from './footer'
import { authStore } from '../stores/auth_store'
import { appState } from '../stores/app_state'
import { observer } from "mobx-react";

@observer
class AppRoute extends Component {
  render() {
    return (
      <div style={{ display : this.props.route.display }} > 
        {this.props.children} 
      </div> 
    ) 
  }
}

@observer
export default class App extends Component {
  render() {
    const routes = appState.routes.routes
    return (
      <div>
        <Header store={authStore} stateNavigator={ this.props.stateNavigator } />
        <div> 
          { routes.map( route =>  
              <AppRoute key={route.id} route={route}>
                { route.component } 
              </AppRoute> 
            ) 
          } 
        </div> 
        <Footer />
      </div> 
    )
  }
}
