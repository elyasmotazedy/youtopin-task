import axios from 'axios';

const config = {
  baseURL: 'http://localhost:5000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'cache-control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 10000,
};

export const api = axios.create(config);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (isNetworkError(error)) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(api(originalRequest));
        }, 2500);
      });
    }

    return error;
  }
);

export const isNetworkError = (err) => {
  console.info(err);

  let result = false;
  if (err.isAxiosError) {
    if (err.code === 'ERR_NETWORK' || err.code === 'ECONNABORTED') {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
};
