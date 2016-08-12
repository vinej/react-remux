import { regs } from './regs'

export default class BaseValidator {
  validType(state, field) {
    let reg = regs[field.ftype]
    console.log('reg', reg)
    if (typeof reg === 'string') { 
      reg = new RegExp(reg); 
    } 

    if (reg && !reg.test(field.value)) { 
      field.error += (field.error !== '' ? ', ' : '') + `${field.displayName} is not of type ${field.ftype}`
      field.valid = false
      state.isError = true
    }
  }

  validRequired(state, field) {
    field.error = ''
    field.valid = true
    if ( field.value === '') {
      field.error += (field.error !== '' ? ', ' : '') +`${field.displayName} is required`
      field.valid = false
      state.isError = true
    }
  }
}    
