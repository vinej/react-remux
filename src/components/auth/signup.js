import React, { Component } from 'react'
import { observer } from "mobx-react"
import AuthActions from '../../actions/auth_actions'
import SignInUpActions from '../../actions/signinup_actions'
import { dispatchParallelActions } from '../../resolvers/dispatcher'
import Wait from '../wait'
import { appState } from '../../stores/app_state'

@observer
export default class SignUp extends Component {

  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)
    this.validate = this.validate.bind(this)
    this.submit = this.submit.bind(this)
    SignInUpActions.init()
  }

  handleSend(event) {
    const vstate = this.props.vstate
    vstate.isError = false
    appState.wait.isWaiting = true
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
      SignInUpActions._validatePassword,
      SignInUpActions._validateConfirmPassword,
      SignInUpActions._validateName ],
      this.submit
    );
  }

  render() {
    const vstate = this.props.vstate
    return (
      <form className='pure-form pure-form pure-form-stacked'>
        <Wait></Wait>
        <fielset>
          <legend>SignUp</legend>
          <div>
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
            <label required>Password Confirm</label>
            <input name="passwordConfirm" 
                    type="password" 
                    value={ vstate.confirmPassword }
                    onBlur = { SignInUpActions.validateConfirmPassword }
                    onChange={(e) => vstate.confirmPassword = e.target.value} />
          </div>
          <div style={{ color : 'red'}}>{ vstate.confirmPasswordError || '' }</div>
          <div>
            <label required>Name</label>
            <input name="name" 
                    type="text" 
                    value={vstate.name}
                    onBlur = { SignInUpActions.validateName }
                    onChange={(e) => vstate.name = e.target.value} />
          </div>
          <div style={{ color : 'red'}}>{ vstate.nameError || '' }</div>
          <div>
            <button disabled={ vstate.isValidating } className='pure-button' onClick={ this.handleSend }>SignUp</button>
          </div>
          <div style={{ color : 'red'}}>{ vstate.error || '' }</div>
        </fielset>
      </form>
    )
  }
}
