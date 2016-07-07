import React, { Component } from 'react'
import { observable, action, transaction } from 'mobx'
import AuthActions from '../actions/auth_actions'
import { browserHistory } from 'react-router'

export default class AuthStore {
  @observable email = ""
  @observable name = ""
  @observable authenticated = false
  @observable errorMessage = ''

  isAutorizationInit = false
  //authorizations = []

  isActionAvailable(actiontype) {
    return true
    // if (actiontype.endsWith("_")) {
    //   actiontype = actiontype.substr(0, actiontype.length - 1);
    // }
    // return this.actions.indexOf(actiontype) > -1
  }

  getError() {
    return this.errorMessage
  }

  setAuthorizations(authorizations) {
    transaction( () => {
      this.isAutorizationInit = true
      this.authorizations = authorizations
    })
    browserHistory.push('/todos')
  }

  checkToken() {
    const token = localStorage.getItem('remux-token')
    if (token != null && token != '') {
      const name = localStorage.getItem('remux-name')
      transaction( () => {
        this.authenticated = true
        this.name = name
        this.errorMessage = ''
        AuthActions.authSetAuthorizations()
      })
    } else {
      transaction( () => {
        this.authenticated = false
        this.name = ''
        this.errorMessage = ''
      })
      browserHistory.push('/signin')
    }
  }

  signInOrUp(token, name) {
    console.log('signinup',token,name)
    localStorage.setItem('remux-token', token);
    localStorage.setItem('remux-name', name);
    transaction( () => {
      this.authenticated = true;
      this.name = name;
      this.errorMessage = '';
    });
    AuthActions.authSetAuthorizations()
  }

  signOut() {
    localStorage.removeItem('remux-token');
    localStorage.removeItem('remux-name');
    transaction(() => {
      this.authenticated = false;
      this.name = '';
      this.errorMessage = '';
    });
  }

  authError(error) {
    console.log(error)
  }
}
export let authStore = new AuthStore()