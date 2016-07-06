export default class TodoService {
  constructor() {
    this.instanceService = null
  }

  static setInstance(instanceService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    if (!this.instanceService) {
      this.instanceService = new CrudService('todos')
    }
    return this.instanceService
  }  
}