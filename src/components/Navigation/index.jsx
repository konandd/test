import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ProductList from '../ProductList';
import SelectedProduct from '../SelectedProduct';
import LaptopsList from '../LaptopsList';

const history = createBrowserHistory();

const Navigation = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Switch>
        <Route exact path="/:name" component={LaptopsList} />
        <Route path="/:name/:id" component={SelectedProduct} />
      </Switch>
    </Switch>
  </Router>
);
export default Navigation;
