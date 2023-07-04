// vendor imports
import { createSlice } from "@reduxjs/toolkit";

// local imports
// constants
import {
  GENRES,
  ORDERING,
  PLATFORM,
  PLATFORM_NAMES,
  RELEASE_DATE,
} from "constants/apiFilters";

export const sectionApiSlice = createSlice({
  name: "sectionApi",
  initialState: {
    apiKey: process.env.API_KEY,
    title: "All Games",
    platforms: PLATFORM[PLATFORM_NAMES.all],
    genres: GENRES.ALL.value,
    ordering: ORDERING.popularityTopToBottom.value,
    pageSize: 20,
    currentPage: 1,
    cards: [],
    isLoading: false,
    searchValue: "",
    releaseDate: RELEASE_DATE.ALL_TIME.value,
    isScrollDown: false,
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
    appendCards: (state, action) => {
      state.cards = [...state.cards, ...action.payload];
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
    setIsScrollDown: (state, action) => {
      state.isScrollDown = action.payload;
    },
    setDefaultData: (state) => {
      state.title = "All Games";
      state.platforms = PLATFORM[PLATFORM_NAMES.all];
      state.genres = GENRES.ALL.value;
      state.ordering = ORDERING.popularityTopToBottom.value;
      state.pageSize = 20;
      state.currentPage = 1;
      state.isLoading = false;
      state.searchValue = "";
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
  appendCards,
  setIsScrollDown,
} = sectionApiSlice.actions;

export default sectionApiSlice.reducer;
