import { observable } from 'mobx'

function formControl(name, initValue) {
  return {
    name: name,
    dirty   : false,   // not implemented yet
    touched : false,   // not implemented yet
    valid   : true,    // not implemented yet
    error : '',       
    isError : false,
    value: initValue
  }
}
// global state
export let appState = {
  signInUp : {
    @observable email: formControl('email', ''),
    @observable password : formControl('password', ''),
    @observable name : formControl('name', 'jyv'),
    @observable confirmPassword : formControl('confirmPassword', ''),
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
