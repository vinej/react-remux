import React, { Component } from 'react'
import { observer } from "mobx-react"
import AuthActions from '../../actions/auth_actions'
import SignInUpActions from '../../actions/signinup_actions'
import { dispatchSynchronousActions } from '../../resolvers/dispatcher'

@observer
export default class SignUp extends Component {

  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)
    this.validate = this.validate.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleSend(event) {
    const store = this.props.store
    store.isError = false
    store.isValidating = true
    event.preventDefault()
    this.validate(event)
  }

  submit() {
    const store = this.props.store
    store.isValidating = false
    if (store.isError === false) {
      AuthActions.authSignIn(store.email, store.password)      
    }
  }

  validate(event) {
    dispatchSynchronousActions( [
      SignInUpActions._validateEmail,
      SignInUpActions._validatePassword,
      SignInUpActions._validateConfirmPassword,
      SignInUpActions._validateName,
      () => this.submit
    ] );
  }

  render() {
    const store = this.props.store
    return (
      <form className='pure-form pure-form pure-form-stacked'>
        <fielset>
          <legend>SignUp</legend>
          <div>
            <label required>Email</label>
            <input name="email" 
                   value={ store.email }
                   onBlur = { SignInUpActions.validateEmail }
                   onChange={(e) => store.email = e.target.value}/>
          </div>
          <div style={{ color : 'red'}}>{ store.emailError || '' }</div>

          <div>
            <label required>Password</label>
            <input name="password" 
                    type="password" 
                    value={ store.password }
                    onBlur = { SignInUpActions.validatePassword }
                    onChange={(e) => store.password = e.target.value} />
          </div>
          <div style={{ color : 'red'}}>{ store.passwordError || '' }</div>
          <div>
            <label required>Password Confirm</label>
            <input name="passwordConfirm" 
                    type="password" 
                    value={ store.confirmPassword }
                    onBlur = { SignInUpActions.validateConfirmPassword }
                    onChange={(e) => store.confirmPassword = e.target.value} />
          </div>
          <div style={{ color : 'red'}}>{ store.confirmPasswordError || '' }</div>
          <div>
            <label required>Name</label>
            <input name="name" 
                    type="text" 
                    value={store.name}
                    onBlur = { SignInUpActions.validateName }
                    onChange={(e) => store.name = e.target.value} />
          </div>
          <div style={{ color : 'red'}}>{ store.nameError || '' }</div>
          <div>
            <button disabled={ store.isValidating } className='pure-button' onClick={ this.handleSend }>SignUp</button>
          </div>
          <div style={{ color : 'red'}}>{ store.error || '' }</div>
        </fielset>
      </form>
    )
  }
}
