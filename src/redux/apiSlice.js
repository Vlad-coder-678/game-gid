import { createSlice } from '@reduxjs/toolkit';
import { API_KEY, ORDERING } from '../constants';
import fetchResults from '../utils/axios';
import { formattedResponse } from '../utils/formattedResponse';

export const sectionApiSlice = createSlice({
  name: 'sectionApi',
  initialState: {
    title: '',
    platforms: '',
    apiKey: API_KEY,
    ordering: ORDERING[3],
    pageSize: 20,
    currentPage: 1,
    cards: [],
    isLoading: false,
    searchValue: '',
    reliseDate: '',
  },
  reducers: {
    setPlatforms: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.ordering = action.payload;
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
      state.release_date = action.payload;
    },
  },
});

// eslint-disable-next-line object-curly-newline
export const {
  setPlatforms,
  sortBy,
  changePageSize,
  setCurrentPage,
  setPages,
  setTotalCards,
  setCards,
  setIsLoading,
  setSearchValue,
  setReleaseDate,
} = sectionApiSlice.actions;

export const fetchResultsInit = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await fetchResults();
    const { results } = response.data;
    // eslint-disable-next-line no-console
    console.log(results);
    // if (results.length === 0) dispatch(setCards(`Sorry, your search "${searchValue}" did not return any results.`));
    // else dispatch(setCards(formattedResponse(results)));
    if (results.length > 0) dispatch(setCards(results));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-alert
    // alert(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const fetchResultsAfterSubmit = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await fetchResults();
    // eslint-disable-next-line no-console
    console.log(response);
    const { results } = response.data;
    // if (results.length === 0) dispatch(setCards(`Sorry, your search "${searchValue}" did not return any results.`));
    // else dispatch(setCards(formattedResponse(results)));
    dispatch(setCards(formattedResponse(results)));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-alert
    alert(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default sectionApiSlice.reducer;
