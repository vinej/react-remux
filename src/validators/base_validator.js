export default class BaseValidator {
  validRequired(state, field) {
    field.error = ''
    field.valid === true
    if ( field.value === '') {
      field.error = 'Email is required'
      field.valid = false
      state.isError = true
    }
  }
}    
