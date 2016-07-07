import React, { Component } from 'react'
import { observer } from "mobx-react"
import { observable } from 'mobx'
import AuthActions from '../../actions/auth_actions'
import AuthStore from '../../stores/auth_store'

@observer
export default class SignIn extends Component {
  @observable email = ''
  @observable password = ''
  @observable error = ''

  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleSend(event) {
    event.preventDefault()
    if (this.validate() === true) {
      AuthActions.authSignIn(this.email,this.password)      
    }
  }

  validate() {
    this.error = ''
    let isValidate = true
    if ( this.email === '') {
      this.error = this.error + ': Email is required'
      isValidate = false
    }

    if ( this.password === '') {
      this.error = this.error + ': Password is required'
      isValidate = false
    }
    return isValidate
  }

  render() {
    return (
      <form className='pure-form pure-form pure-form-stacked'>
        <fielset>
          <legend>SignIn</legend>
          <div className='pure-control'>
            <label required>Email</label>
            <input name="email" 
                    id="email"
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
            <button className='pure-button' onClick={ this.handleSend }>SignIn</button>
          </div>
          { this.error || '' }
        </fielset>
      </form>
    )
  }
}



