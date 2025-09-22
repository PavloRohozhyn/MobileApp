// api repo locate here - https://pavlorohozhyn.github.io/MobileAppApi
import axios from 'axios';

/**
 * Instance
 */
const api = axios.create({
  baseURL: 'https://pavlorohozhyn.github.io/MobileAppApi',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request
 */
api.interceptors.request.use(request => {
  // console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

/**
 * Response
 */
api.interceptors.response.use(response => {
  // console.log('Response:', JSON.stringify(response, null, 2));
  return response;
});

export default api;
