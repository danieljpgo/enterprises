import axios from 'axios';
import { interceptor } from './interceptos';

// @TODO Pegar a url via env

export const api = axios.create({ baseURL: 'https://empresas.ioasys.com.br/api/v1/' });

api.interceptors.request.use(interceptor);
