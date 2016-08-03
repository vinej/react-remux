import React, { Component } from 'react'
import { observer } from "mobx-react"
import AuthActions from '../../actions/auth_actions'
import SignInUpActions from '../../actions/signinup_actions'
import { dispatchSynchronousActions } from '../../resolvers/dispatcher'

@observer
export default class SignIn extends Component {

  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)
    this.validate = this.validate.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleSend(event) {
    const vstate = this.props.vstate
    vstate.isError = false
    vstate.isValidating = true
    event.preventDefault()
    this.validate(event)
  }

  submit() {
    const vstate = this.props.vstate
    vstate.isValidating = false
    if (vstate.isError === false) {
      AuthActions.authSignIn(vstate.email, vstate.password)      
    }
  }

  validate(event) {
    dispatchSynchronousActions( [
      SignInUpActions._validateEmail,
      SignInUpActions._validatePassword,
      () => this.submit
    ] );
  }

  render() {
    const vstate = this.props.vstate
    return (
      <form className='pure-form pure-form pure-form-stacked'>
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
            <button disabled={ vstate.isValidating } className='pure-button' onClick={ this.handleSend }>SignIn</button>
          </div>
          <div style={{ color : 'red'}}>{ vstate.error || '' }</div>
        </fielset>
      </form>
    )
  }
}



