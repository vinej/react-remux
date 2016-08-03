import React, { Component } from 'react'
import { observer } from "mobx-react"
import AuthActions from '../../actions/auth_actions'
import SignInUpActions from '../../actions/signinup_actions'
import { dispatchParallelActions } from '../../resolvers/dispatcher'
import Wait from '../wait'
import { appState } from '../../stores/app_state'

@observer
export default class SignIn extends Component {

  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)
    this.validate = this.validate.bind(this)
    this.submit = this.submit.bind(this)
    SignInUpActions.init()
  }

  handleSend(event) {
    const vstate = this.props.vstate
    appState.wait.isWaiting = true
    vstate.isError = false
    event.preventDefault()
    this.validate(event)
  }

  submit() {
    const vstate = this.props.vstate
    appState.wait.isWaiting = false
    if (vstate.isError === false) {
      AuthActions.authSignIn(vstate.email, vstate.password)      
    }
  }

  validate(event) {
    dispatchParallelActions( [
      SignInUpActions._validateEmail,
      SignInUpActions._validatePassword ], this.submit
    );
  }

  render() {
    const vstate = this.props.vstate
    return (
      <form className='pure-form pure-form pure-form-stacked'>
        <Wait></Wait>
        <fielset>
          <legend>SignIn</legend>
          <div className='pure-control'>
            <label required>Email</label>
            <input name="email" 
                   value={ vstate.email }
                   onBlur = { SignInUpActions.validateEmail }
                   onChange={(e) => vstate.email = e.target.value}/>
          </div>
          <div style={{ color : 'red'}}>{ vstate.emailError || '' }</div>

          <div>
            <label required>Password</label>
            <input name="password" 
                    type="password" 
                    value={ vstate.password }
                    onBlur = { SignInUpActions.validatePassword }
                    onChange={(e) => vstate.password = e.target.value} />
          </div>
          <div style={{ color : 'red'}}>{ vstate.passwordError || '' }</div>
          <div>
            <button className='pure-button' onClick={ this.handleSend }>SignIn</button>
          </div>
          <div style={{ color : 'red'}}>{ vstate.error || '' }</div>
        </fielset>
      </form>
    )
  }
}



