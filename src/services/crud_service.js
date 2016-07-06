import axios from 'axios';
import { API_URL, HEADERS, PARAMETERS } from './config_service';

export default class CrudService {
  constructor(service) {
    this.service = service;
  }

  add(entity, next, err) {
    axios.post(`${API_URL}/${this.service}?${PARAMETERS()}`, entity, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(response => err(response.data));
  };

  delete(entity, next, err) {
    axios.delete(`${API_URL}/${this.service}/${entity._id}?${PARAMETERS()}`, HEADERS())
    .then(response => {
      next(entity); 
    })
    .catch(response => err(response.data));
  };

  update(entity, next, err) {
    axios.put(`${API_URL}/${this.service}?${PARAMETERS()}`, entity, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(response => err(response.data));
  };

  getAll(next, err) {
    axios.get(`${API_URL}/${this.service}?${PARAMETERS()}`, HEADERS())
    .then(response => {
        next(response.data);
    })
    .catch(response => err(response.data));
  };
}
