import axios from 'axios';
import { interceptor } from './config';

// @TODO Pegar a url via env

export const api = axios
  .create({ baseURL: 'http://empresas.ioasys.com.br' })
  .interceptors.request.use(interceptor);
