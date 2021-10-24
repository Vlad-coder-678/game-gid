import { createSlice } from '@reduxjs/toolkit';
import { API_KEY, PLATFORMS, GENRES, ORDERING, RELEASE_DATE } from '../constants';
import fetchResults from '../utils/axios';

export const sectionApiSlice = createSlice({
  name: 'sectionApi',
  initialState: {
    apiKey: API_KEY,
    title: 'All Games',
    platforms: PLATFORMS.ALL.value,
    genres: GENRES.ALL.value,
    ordering: ORDERING.POPULARITY_TOP_TO_BOTTOM.value,
    pageSize: 20,
    currentPage: 1,
    cards: [],
    isLoading: false,
    searchValue: '',
    releaseDate: RELEASE_DATE.ALL_TIME.value,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setPlatforms: (state, action) => {
      state.platforms = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    orderingBy: (state, action) => {
      state.ordering = action.payload;
    },
    setTotalCards: (state, action) => {
      state.totalCards = action.payload;
    },
    setPages: (state) => {
      state.pages = new Array(Math.ceil(state.totalCards / state.pageSize)).fill(1).map((a, i) => i + 1);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setReleaseDate: (state, action) => {
      state.releaseDate = action.payload;
    },
    setDefaultData: (state) => {
      state.title = 'All Games';
      state.platforms = PLATFORMS.ALL.value;
      state.genres = GENRES.ALL.value;
      state.ordering = ORDERING.POPULARITY_TOP_TO_BOTTOM.value;
      state.pageSize = 20;
      state.currentPage = 1;
      state.isLoading = false;
      state.searchValue = '';
      state.releaseDate = RELEASE_DATE.ALL_TIME.value;
    },
  },
});

export const {
  setTitle,
  setPlatforms,
  setGenres,
  orderingBy,
  setTotalCards,
  setPages,
  setCurrentPage,
  setCards,
  setIsLoading,
  setSearchValue,
  setReleaseDate,
  setDefaultData,
} = sectionApiSlice.actions;

export const fetchGamesResults = (page, pageSize, search, platforms, genres, dates, ordering) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await fetchResults(page, pageSize, search, platforms, genres, dates, ordering);
    if (response) {
      const { results } = response.data;
      dispatch(setCards(results));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default sectionApiSlice.reducer;
