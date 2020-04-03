import React from 'react';
import { Home } from './components/Home';
import { ListCarCard } from './components/ListCarCard';
import CarInfo from './components/CarInfo';
import { NotFound } from './components/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';

export const routes = (
  <Switch>
    <Route exact path="/" component={Home}>
      <Redirect to="/cars" />
    </Route>
    <Route exact path="/cars" component={ListCarCard} />
    <Route exact path="/cars/:id" component={CarInfo} />
    <Route component={NotFound} />
  </Switch>
);
