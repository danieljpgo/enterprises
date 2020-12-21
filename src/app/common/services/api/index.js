import axios from 'axios';
import { request, response } from './interceptos';

export const api = axios.create({ baseURL: 'https://empresas.ioasys.com.br/api/v1/' });

api.interceptors.request.use(request);
api.interceptors.response.use((res) => res, response);
