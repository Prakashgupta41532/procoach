import axios from 'axios';
import debugLog from './logger/Logger';

const TAG = 'NetworkOps: ';

const unAuthRoutes = [];

const API_TIMEOUT = 10000;
const instance = axios.create({
  timeout: API_TIMEOUT,
});

instance.interceptors.request.use(
  config => {
    let newConfig = config;
    const url = config.url;
    try {
      const isTokenRequired = !unAuthRoutes.includes(url);

      if (isTokenRequired) {
        const token = 'example token';
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
            Authorization: `Bearer ${token}`,
          },
          timeout: API_TIMEOUT,
        };
      } else {
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
          },
          timeout: API_TIMEOUT,
        };
      }
    } catch (e) {
      debugLog(TAG, `Error in interceptor request', ${e.message}`);
    }
    return newConfig;
  },
  error => {
    debugLog(TAG, `Error in interceptor request', ${error.message}`);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  res => {
    return Promise.resolve(res);
  },
  error => {
    return Promise.reject(error);
  },
);

const ApiRequest = {
  makeGetRequest: URL => instance.get(URL),
  makePostRequest: (URL, data) => instance.post(URL, data),
  makePutRequest: (URL, data) => instance.put(URL, data),
  makePatchRequest: (URL, data) => instance.patch(URL, data),
  makeDeleteRequest: URL => instance.delete(URL),
};

export default ApiRequest;
