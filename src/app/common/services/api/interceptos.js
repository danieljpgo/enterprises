import { getLocalStorageData } from '../../utils/helpers/localStorage';

export const request = async (config) => {
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
  }
  return config;
};

export const response = (error) => {
  if (error.response.status === 401 || error.response.status === 403) {
    window.localStorage.removeItem('headers');
    window.location.reload();
  }
  return Promise.reject(error);
};
