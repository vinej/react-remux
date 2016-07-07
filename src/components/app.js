import React, { Component } from 'react'
import Header from './header'
import { Footer } from './footer'
import { authStore } from '../stores/auth_store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header store={authStore} />
        { this.props.children }
        <Footer />
      </div> )
  }
}