export default class BaseValidator {
  validRequired(state, field) {
    console.log('validator',state, field)
    field.error = ''
    field.valid = true
    if ( field.value === '') {
      field.error = field.displayName + ' is required'
      field.valid = false
      state.isError = true
    }
  }
}    
