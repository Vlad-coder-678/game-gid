import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { fetchResultsInit } from '../redux/apiSlice';
import Home from '../pages/Home';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

const Body = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResultsInit());
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={300} classNames="transition">
        <Switch location={location}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details/:cardIndex" render={() => <Details />} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Body;
