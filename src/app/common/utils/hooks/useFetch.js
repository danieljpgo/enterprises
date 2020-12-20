import useSWR from 'swr';
import { api } from '../../services/api';

const fetcher = (endpoint) => api
  .get(endpoint)
  .then((response) => response.data);

const useFetch = (url, config) => {
  const {
    data,
    error,
    isValidating,
    mutate,
    revalidate,
  } = useSWR(url, fetcher, config);

  return {
    data,
    isError: error,
    isLoading: !error && !data,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useFetch;
