import { observable } from 'mobx'
import Field from './field'

// global state
export let appState = {
  formSignInUp : {
    email           : new Field('email', 'Email', 'string', ''),
    password        : new Field('password', 'Password', 'string', ''),
    name            : new Field('name', 'Name', 'string', 'jyv'),
    confirmPassword : new Field('confirmPassword', 'ConfirmPassword', 'string', ''),
    @observable error : '',
    @observable isError : false,
  },
  user : {
    @observable name : '',
    @observable authenticated : false,
    @observable errorMessage : '',
    @observable isAutorizationInit : false
    //authorizations = []
  },
  todos : {
    @observable todos : [],
    @observable desc : '',
    count : 3
  },
  routes : {
    @observable routes : [],
    currentRoute : -1
  },
  remux: {
    @observable isWaiting : false
  }
}
