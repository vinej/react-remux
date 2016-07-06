import axios from 'axios'
import { ROOT_URL, HEADERS, PARAMETERS } from './config_service'

export default class AuthService {
  constructor() {
    this.instanceService = null
  }

  static setInstance(instanceService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    if (!this.instanceService) {
      this.instanceService = new AuthService()
    }
    return this.instanceService
  }

  signIn({ email, password }, next, err) {
    axios.post(`${ROOT_URL}/auth/signin?${PARAMETERS()}`, { email, password })
    .then(response => {
      console.log(response.data.token)
      next(response.data.token, response.data.name); 
    })
    .catch(response => {
      err(response.data)
    });
  }

  signUp({ email, password, name }, next, err) {
    axios.post(`${ROOT_URL}/auth/signup?${PARAMETERS()}`, { email, password, name })
    .then(response => {
      console.log(response.data.token)
      next(response.data.token, name); 
    })
    .catch(response => err(response.data));
  }

  setAuthorizations(next, err) {
    axios.get(`${ROOT_URL}/api/actions?${PARAMETERS()}`, HEADERS())
    .then(response => {
      next(response.data)
    })
    .catch(response => {
      err(response.data)
    })
  }
}


