// vendor imports
import axios from "axios";

// local imports
import API from "constants/api";

const axiosInstance = axios.create({
  baseURL: `${API.protocol}://${API.domain}`,
  responseType: "json",
  timeout: 3000,
  params: {
    key: process.env.API_KEY,
  },
});

const fetchResults = ({ page = 1, pageSize, search, platform, genre, dates, ordering }) => {
  const p = `page=${page}`;
  const pS = pageSize ? `&page_size=${pageSize}` : "";
  const sV = search?.length > 0 ? `&search=${search}` : "";
  const pl = platform ? `&platforms=${platform}` : "";
  const gen = genre?.length > 0 ? `&genres=${genre}` : "";
  const dat = dates?.length > 0 ? `&dates=${dates}` : "";
  const ord = ordering ? `&ordering=${ordering}` : "";

  const url = `api/games?${p}${pS}${sV}${pl}${gen}${dat}${ord}`;
  // eslint-disable-next-line no-console
  console.log("fetchResults", url);
  return axiosInstance.get(url);
};

export default fetchResults;
