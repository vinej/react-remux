import React, { Component } from 'react'
import { observer } from "mobx-react"
import AuthActions from '../../actions/auth_actions'

@observer
export default class SignIn extends Component {

  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleSend(event) {
    const store = this.props.store
    event.preventDefault()
    if (this.validate() === true) {
      AuthActions.authSignIn(store.email, store.password)      
    }
  }

  validate() {
    const store = this.props.store
    store.error = ''
    let isValidate = true
    if ( store.email === '') {
      store.error = 'Email is required'
      isValidate = false
    }

    if ( store.password === '') {
      store.error = store.error + (isValidate === false ?' : ' : '') + 'Password is required'
      isValidate = false
    }
    return isValidate
  }

  render() {
    const store = this.props.store
    return (
      <form className='pure-form pure-form pure-form-stacked'>
        <fielset>
          <legend>SignIn</legend>
          <div className='pure-control'>
            <label required>Email</label>
            <input name="email" 
                   value={ store.email }
                   onChange={(e) => store.email = e.target.value}/>
          </div>

          <div>
            <label required>Password</label>
            <input name="password" 
                    type="password" 
                    value={ store.password }
                    onChange={(e) => store.password = e.target.value} />
          </div>
          <div>
            <button className='pure-button' onClick={ this.handleSend }>SignIn</button>
          </div>
          <div style={{ color : 'red'}}>{ store.error || '' }</div>
        </fielset>
      </form>
    )
  }
}



