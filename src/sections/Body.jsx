import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

import { setIsScrollDown, fetchGamesResults, fetchMoreResults } from '../redux/apiSlice';

const Body = () => {
  const location = useLocation();
  const stateApi = useSelector((state) => state.api);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchGamesResults(
        stateApi.currentPage,
        stateApi.pageSize,
        stateApi.searchValue,
        stateApi.platforms,
        stateApi.genres,
        stateApi.releaseDate,
        stateApi.ordering,
      ),
    );
  }, [
    dispatch,
    stateApi.title,
    stateApi.platforms,
    stateApi.genres,
    stateApi.ordering,
    stateApi.searchValue,
    stateApi.releaseDate,
  ]);

  const handlerScroll = () => {
    if (stateApi.isScrollDown) dispatch(
      fetchMoreResults(
        stateApi.currentPage,
        stateApi.pageSize,
        stateApi.searchValue,
        stateApi.platforms,
        stateApi.genres,
        stateApi.releaseDate,
        stateApi.ordering,
      ),
    );
    dispatch(setIsScrollDown(false));
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => window.removeEventListener('scroll', handlerScroll);
  }, [stateApi.isScrollDown, window.scrollY]);

  return (
    <Switch location={location}>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/game/:slug" render={() => <Details />} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Body;
