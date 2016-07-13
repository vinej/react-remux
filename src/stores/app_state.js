import { observable } from 'mobx'

// global state
export let appState = {
  signInUp : {
    @observable email : '',
    @observable password : '',
    @observable name : 'jyv',
    @observable confirmPassword : '',
    @observable error : ''
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
  }
}
