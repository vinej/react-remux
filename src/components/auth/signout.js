import React, { Component } from 'react';
import AuthActions from '../../actions/auth_actions'

export default class SignOut extends Component {
  componentWillMount() {
    AuthActions.authSignOut()
  }

  render() {
    return <div>Sorry to see you leave</div>
  }
}

