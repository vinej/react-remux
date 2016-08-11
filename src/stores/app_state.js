import { observable } from 'mobx'

class formControl {
  @observable _name = name
  @observable _initValue = ''
  @observable _value = ''  
  @observable _dirty = false
  @observable _touched = false
  @observable _valid = true
  @observable _error = ''  

  constuctor(name,initValue) {
    this._name = name
    this._initValue = initValue
    this.init()
  }

  init() {
    this._value = this._initValue
    this.error = ''
    this._dirty = false
    this._touched = false
    this._valid = true
  }

  reset() {
    this._value = this._initValue
  }

  clear() {
    this._value = ''
  }

  get initValue() { return this._initValue }
  set initValue(value) { this._initValue = value }

  get error() { return this._error }
  set error(value) { this._error = value }

  get name() { return this._name }
  set name(value) { this._name = value }

  get dirty() { return this._dirty }
  set dirty(value) { this._dirty = value }

  get touched() { return this._touched }
  set touched(value) { this._touched = value }

  get valid() { return this._valid }
  set valid(value) { this._valid = value }

  get value() { return this._value }
  set value(value) 
  { 
    this._value = value
    this._touched = true
    this._dirty = this._value !== this._initValue
  }
}

// global state
export let appState = {
  formSignInUp : {
    email           : new formControl('email', ''),
    password        : new formControl('password', ''),
    name            : new formControl('name', 'jyv'),
    confirmPassword : new formControl('confirmPassword', ''),
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
