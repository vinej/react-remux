import { action } from 'mobx'
import RemuxActions from '../actions/remux_actions'
import { appState } from './app_state'

export default class RemuxStore {
  static currentToken = 1

  constructor() {
    this.state = appState.remux
    this.checkWait = false
  }

  @action
  wait(isSet) {
    this.state.isWaiting = isSet
    RemuxStore.currentToken = RemuxStore.currentToken + 1
    // allow max 5 seconds of wait, after that unlock the page
    // because there is maybe an unhandle error and the page could be locked
    // It's only a protection for special cases. Cound be desactivated 
    if (isSet === true) {
      window.setTimeout( (token) => {
        let state = appState.remux
        console.log(token, state)
        if (state.isWaiting === true && token === RemuxStore.currentToken) {
          console.log('stop waiting after 5 seconds')
          state.isWaiting = false
        }
      }, 5000, RemuxStore.currentToken)
    }
  }
}
export let remuxStore = new RemuxStore()
