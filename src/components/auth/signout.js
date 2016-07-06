import React, { Component } from 'react';
import { authActions} from '../../actions/auth_actions'

export default class SignOut extends Component {
  componentWillMount() {
    authActions.authSignOut()
  }

  render() {
    return <div>Sorry to see you leave</div>
  }
}

