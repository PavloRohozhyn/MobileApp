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

/**
 * Get data for Main Screen
 * @returns array
 */
export const getDataForMainScreen = async () => {
  return await api.get('/main-screen.json');
};

/**
 * get list of dictionaries
 */
export const getListOfDictionaries = async () => {
  return await api.get('/dictionaries-list.json');
};

/**
 * get list of words
 */
export const getListOfWordsByDictId = async dictId => {
  const words = await api.get('/words-by-dictionary-id.json');
  let res = [];
  // console.log('dictionary', dictId);
  // console.log('words before', words.data);
  if (words.data.data && words.data.data.length > 0) {
    // console.log('words before 1', words.data.data);
    res = words.data.data.filter(el => el.dict_id == dictId);
    // console.log('word result', res);
    return res;
  }

  return res;
};
