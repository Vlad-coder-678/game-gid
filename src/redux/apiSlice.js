import { createSlice } from '@reduxjs/toolkit';
import { API_KEY, PLATFORMS, GENRES, ORDERING, RELEASE_DATE } from '../constants';
import { fetchResults } from '../utils/axios';

export const sectionApiSlice = createSlice({
  name: 'sectionApi',
  initialState: {
    apiKey: API_KEY,
    title: 'All Games',
    platforms: PLATFORMS.ALL.value,
    genres: GENRES.ALL.value,
    ordering: ORDERING.ADDED.value,
    pageSize: 20,
    currentPage: 1,
    cards: [],
    isLoading: false,
    searchValue: '',
    reliseDate: RELEASE_DATE.ALL_TIME.value,
  },
  reducers: {
    setTitle: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.title = action.payload;
    },
    setPlatforms: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.platforms = action.payload;
    },
    setGenres: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.genres = action.payload;
    },
    orderingBy: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.ordering = action.payload;
    },
    setTotalCards: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.totalCards = action.payload;
    },
    setPages: (state) => {
      //   eslint-disable-next-line no-param-reassign
      state.pages = new Array(Math.ceil(state.totalCards / state.pageSize)).fill(1).map((a, i) => i + 1);
    },
    setCurrentPage: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.currentPage = action.payload;
    },
    setCards: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cards = action.payload;
    },
    setIsLoading: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = action.payload;
    },
    setSearchValue: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.searchValue = action.payload;
    },
    setReleaseDate: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.reliseDate = action.payload;
    },
  },
});

// eslint-disable-next-line object-curly-newline
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
} = sectionApiSlice.actions;

export const fetchGamesResults = (page, pageSize, search, platforms, genres, dates, ordering) => async (dispatch) => {
  // eslint-disable-next-line no-console
  // console.log(response);
  dispatch(setIsLoading(true));
  try {
    const response = await fetchResults(page, pageSize, search, platforms, genres, dates, ordering);
    // eslint-disable-next-line no-console
    console.log(response);
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
