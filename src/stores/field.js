import { observable } from 'mobx'

export default class Field {
  _ftype = ''   // not implemented yet
  _initValue = ''
  _name = ''
  _displayName = ''
  @observable _value = ''  
  @observable _dirty = false
  @observable _touched = false
  @observable _valid = true
  @observable _error = ''  

  constructor(name, displayName, ftype, initValue) {
    console.log('const', name, initValue)
    this._name = name
    this._displayName = displayName
    this._ftype = ftype
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

  get displayName() { return this._displayName }
  set displayName(value) { this._displayName = value }

  get ftype() { return this._ftype }
  set ftype(value) { this._ftype = value }

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
