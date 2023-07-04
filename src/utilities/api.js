// local imports
// store
import { appendCards, setCards, setIsLoading } from "store/apiSlice";
// utilities
import fetchResults from "utilities/axios";

const fetchGamesResults = ({ page, pageSize, search, platforms, genres, dates, ordering }) => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const response = await fetchResults({ page, pageSize, search, platforms, genres, dates, ordering });

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

const fetchMoreResults = ({ page, pageSize, search, platforms, genres, dates, ordering }) => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const response = await fetchResults({ page, pageSize, search, platforms, genres, dates, ordering });
    if (response) {
      const { results } = response.data;
      dispatch(appendCards(results));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export {
  fetchGamesResults,
  fetchMoreResults,
};
