import axios from 'axios';
import { API_KEY } from '../constants';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/',
  responseType: 'json',
  timeout: 3000,
  params: {
    key: API_KEY,
  },
});

const fetchResults = (page = 1, pageSize, search, platform, genre, dates, ordering) => {
  const p = page ? `page=${page}` : 'page=1';
  const pS = pageSize ? `&page_size=${pageSize}` : '';
  const sV = search && search.length > 0 ? `&search=${search}` : '';
  const pl = platform ? `&platforms=${platform}` : '';
  const gen = genre && genre.length > 0 ? `&genres=${genre}` : '';
  const dat = dates && dates.length > 0 ? `&dates=${dates}` : '';
  const ord = ordering ? `&ordering=${ordering}` : '';

  return axiosInstance.get(`api/games?${p}${pS}${sV}${pl}${gen}${dat}${ord}`);
};

export default fetchResults;
