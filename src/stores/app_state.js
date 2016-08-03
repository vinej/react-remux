import { observable } from 'mobx'

// global state
export let appState = {
  signInUp : {
    @observable email : '',
    @observable emailError : '',
    @observable password : '',
    @observable passwordError : '',
    @observable name : '',
    @observable nameError : '',
    @observable confirmPassword : '',
    @observable confirmPasswordError : '',
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
  wait: {
    @observable isWaiting : false
  }
}
