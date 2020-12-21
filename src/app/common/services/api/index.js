import axios from 'axios';
import { interceptor } from './interceptos';

export const api = axios.create({ baseURL: 'https://empresas.ioasys.com.br/api/v1/' });

api.interceptors.request.use(interceptor);
