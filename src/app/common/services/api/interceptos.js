import { getLocalStorageData } from '../../utils/helpers/localStorage';
import { history } from '../../../routers/history';

// @TODO verificar sobre o tempo de expiração

export const interceptor = async (config) => {
  if (!config.url.includes('sign_in')) {
    const { client, uid, ...headers } = getLocalStorageData('headers');

    if (client && uid && headers['access-token']) {
      return {
        ...config,
        headers: {
          ...config.headers,
          uid,
          client,
          'access-token': headers['access-token'],
        },
      };
    }

    history.push('/login');
    throw new Error('Sua seção expirou. Faça login novamente');
  }
  return config;
};
