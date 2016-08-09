import React, { Component} from 'react'
import { observer } from "mobx-react";
import { appState } from '../stores/app_state'

@observer
export default class Wait extends Component {
  renderWait() {
    const state = appState.remux
    if (state.isWaiting) {
      return (<div><div className='waiting'>Please wait</div><div className='overlay'></div></div>)
    } else {
      return (<div></div>)
    }
  }

  render() {
    return (
      this.renderWait()
    )
  }
}
