import React, { Component} from 'react'
import { NavigationLink } from 'navigation-react'
import { observer } from "mobx-react";

@observer
export default class Header extends Component {
  renderSignInUp(authenticated, stateNavigator) {
    if (authenticated === false) {
      return [ 
        <span key='1'>
          <NavigationLink 
            stateNavigator = {stateNavigator}
            stateKey='signin' >SignIn
          </NavigationLink>
        </span>,
        <span key='2'>
          <NavigationLink 
            stateNavigator = {stateNavigator}
            stateKey='signup'>SignUp
          </NavigationLink>
        </span> ]
    } else {
      return [  
        <span key='4'>
          <NavigationLink 
            stateNavigator = {stateNavigator}
            stateKey='todos' >Todos
          </NavigationLink>
        </span>,
        <span key='3'>
          <NavigationLink 
            stateNavigator = {stateNavigator}
            stateKey='signout' >SignOut
          </NavigationLink>
        </span> 
      ]
    }
  }

  render() {
    const store = this.props.store
    return (
      <div className="pure-g header">
          <div className="pure-u-1-4">
            <div>ReMux</div>
          </div>
          <div className="pure-u-3-4" >
            <span key='5'>
              <NavigationLink 
                stateNavigator = {this.props.stateNavigator}
                stateKey='welcome' >Welcome
              </NavigationLink>
            </span>
            { this.renderSignInUp(store.isAuthenticated(), this.props.stateNavigator) }
            <div
                onClick= { () => alert('ReMux example : https://github.com/vinej/react-portal') } 
                style={{float: 'right'}}>?</div>
          </div>
     </div>
    )
  }
}
