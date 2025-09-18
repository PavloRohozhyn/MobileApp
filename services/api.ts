// api repo locate here - https://pavlorohozhyn.github.io/MobileAppApi/

import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pavlorohozhyn.github.io/MobileAppApi/',
});

export default api;

/**
 * get list of dictionaries
 */
export const getListOfDictionaries = async () => {
  return await api.get('dictionaries-list.json');
};
