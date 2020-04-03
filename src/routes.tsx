import React from 'react';
import { Home } from './components/Home';
import CarInfo from './components/CarInfo';
import { NotFound } from './components/NotFound';
import { Route, Switch } from 'react-router-dom';

export const routes = (
  <Switch>
    <Route exact path="/cars" component={Home} />
    <Route exact path="/cars/:id" component={CarInfo} />
    <Route component={NotFound} />
  </Switch>
);
