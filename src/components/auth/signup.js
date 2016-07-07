import React, { Component } from 'react'
import { observer } from "mobx-react"
import { observable } from 'mobx'
import AuthActions from '../../actions/auth_actions'
import AuthStore from '../../stores/auth_store'

@observer
export default class SignUp extends Component {
  @observable email = ''
  @observable password = ''
  @observable passwordConfirm = ''
  @observable name = ''
  @observable error = ''

  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleSend(event) {
    event.preventDefault()
    if (this.validate() === true) {
      AuthActions.authSignUp(this.email,this.password,this.name)      
    }
  }

  validate() {
    this.error = ''
    let isValidate = true
    if ( this.email === '') {
      this.error = this.error + ': Email is required!'
      isValidate = false
    }
    if ( this.password === '') {
      this.error = this.error + ': Password is required!'
      isValidate = false
    }
    if ( this.passwordConfirm === '') {
      this.error = this.error + ': Password confirm is required!'
      isValidate = false
    }
    if ( this.password !== this.passwordConfirm) {
      this.error = this.error + ': Both password are not equal!'
      isValidate = false
    }
    if ( this.name === '') {
      this.error = this.error + ': Name is required!'
      isValidate = false
    }
    return isValidate
  }

  render() {
    return (
      <form className='pure-form pure-form pure-form-stacked'>
        <fielset>
          <legend>SignUp</legend>
          <div>
            <label required>Email</label>
            <input name="email" 
                   value={ this.email }
                   onChange={(e) => this.email = e.target.value}/>
          </div>

          <div>
            <label required>Password</label>
            <input name="password" 
                    type="password" 
                    value={this.password}
                    onChange={(e) => this.password = e.target.value} />
          </div>
          <div>
            <label required>Password Confirm</label>
            <input name="passwordConfirm" 
                    type="password" 
                    value={this.passwordConfirm}
                    onChange={(e) => this.passwordConfirm = e.target.value} />
          </div>
          <div>
            <label required>Name</label>
            <input name="name" 
                    type="text" 
                    value={this.name}
                    onChange={(e) => this.name = e.target.value} />
          </div>
          <div>
            <button className='pure-button' onClick={ this.handleSend }>SignUp</button>
          </div>
          <div style={{ color : 'red'}}>{ this.error || '' }</div>
        </fielset>
      </form>
    )
  }
}



