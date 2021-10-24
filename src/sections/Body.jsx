import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { fetchGamesResults } from '../redux/apiSlice';

import Home from '../pages/Home';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

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
        stateApi.reliseDate,
        stateApi.ordering,
      ),
    );
  }, [
    dispatch,
    stateApi.searchValue,
    stateApi.currentPage,
    stateApi.platforms,
    stateApi.genres,
    stateApi.reliseDate,
    stateApi.ordering,
  ]);

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={300} classNames="transition">
        <Switch location={location}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game/:slug" render={() => <Details />} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Body;
