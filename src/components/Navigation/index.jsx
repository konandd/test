import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ProductList from '../ProductList';
import SelectedProduct from '../SelectedProduct';
import LaptopsList from '../LaptopsList';

const history = createBrowserHistory();

const Navigation = ({ firms, laptops }) => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={props => <ProductList firms={firms} {...props} />} />
      <Switch>
        <Route exact path="/:name" render={props => <LaptopsList laptops={laptops} {...props} />} />
        <Route path="/:name/:id" component={SelectedProduct} />
      </Switch>
    </Switch>
  </Router>
);
export default Navigation;
