import React, { Component } from 'react';

export default function(ComposedComponent, store, stateNavigator) {
  class Authentication extends Component {

    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!store.isAuthenticated()) {
        stateNavigator.navigate('signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!store.isAuthenticated()) {
        stateNavigator.navigate('signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication;
}
