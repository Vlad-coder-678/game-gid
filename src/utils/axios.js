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

export const fetchInit = () => axiosInstance.get('api/games');

// export const fetchResults = (
//   page = 1,
//   pageSize,
//   search,
//   platforms,
//   genres,
//   dates,
//   metacritic,
//   ordering
// ) => axiosInstance
// .get(`api/games?page=${page}${pageSize ? `&page_size=${pageSize}` : ''}${
//   search && search.length > 0 ? `&search=${search}` : ''
// }${platforms ? `&platforms=${platforms}` : ''}${genres && genres.length > 0 ? `&genres=${genres}` : ''}${
//   dates && dates.length > 0 ? `&dates=${dates}` : ''
// }${metacritic ? `&metacritic=${metacritic}` : ''}${ordering ? `&ordering=${ordering}` : ''}
// `);

export const fetchResults = (page = 1, pageSize, search, platform, genre, dates, ordering) => axiosInstance
.get(`api/games?page=${page}${pageSize ? `&page_size=${pageSize}` : ''}${
  search && search.length > 0 ? `&search=${search}` : ''
}${platform ? `&platforms=${platform}` : ''}${genre && genre.length > 0 ? `&genres=${genre}` : ''}${
  dates && dates.length > 0 ? `&dates=${dates}` : ''
}${ordering ? `&ordering=-${ordering}` : ''}
`);
