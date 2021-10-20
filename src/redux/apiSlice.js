import { createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../constants';

export const sectionApiSlice = createSlice({
  name: 'sectionApi',
  initialState: {
    apiKey: API_KEY,
    sortType: 'relevancy',
    pageSize: 5,
    totalCards: 0,
    pages: [],
    currentPage: 1,
    cards: [],
    isLoading: false,
    searchQuery: '',
  },
  reducers: {
    sortBy: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.sortType = action.payload;
    },
    changePageSize: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.pageSize = action.payload;
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
      state.arts = action.payload;
    },
    setIsLoading: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = action.payload;
    },
    setSearchQuery: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.searchQuery = action.payload;
    },
  },
});

// eslint-disable-next-line object-curly-newline
export const {
  sortBy,
  changePageSize,
  setCurrentPage,
  setPages,
  setTotalCards,
  setCards,
  setIsLoading,
  setSearchQuery,
} = sectionApiSlice.actions;

export default sectionApiSlice.reducer;
