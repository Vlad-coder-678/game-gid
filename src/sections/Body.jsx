import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '../pages/Home';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

const Body = () => {
  const location = useLocation();

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
