import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/",
  responseType: "json",
  timeout: 3000,
  params: {
    key: process.env.API_KEY,
  },
});

const fetchResults = ({ page = 1, pageSize, search, platform, genre, dates, ordering }) => {
  const p = `page=${page}`;
  const pS = pageSize ? `&page_size=${pageSize}` : "";
  const sV = search && search.length > 0 ? `&search=${search}` : "";
  const pl = platform ? `&platforms=${platform}` : "";
  const gen = genre && genre.length > 0 ? `&genres=${genre}` : "";
  const dat = dates && dates.length > 0 ? `&dates=${dates}` : "";
  const ord = ordering ? `&ordering=${ordering}` : "";

  return axiosInstance.get(`api/games?${p}${pS}${sV}${pl}${gen}${dat}${ord}`);
};

export default fetchResults;
