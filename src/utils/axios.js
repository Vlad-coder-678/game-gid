import axios from 'axios';
// import { API_KEY, DEFAULT_CURRENT_PAGE } from '../constants';
import { API_KEY } from '../constants';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/',
  responseType: 'json',
  timeout: 3000,
  params: {
    key: API_KEY,
  },
});

const fetchResults = () => axiosInstance.get('api/games');

export default fetchResults;
