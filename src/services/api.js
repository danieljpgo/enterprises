import axios from 'axios';

const api = axios.create({
  baseURL: 'http://empresas.ioasys.com.br/api/v1'
});

export default api;