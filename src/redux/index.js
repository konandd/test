import { combineReducers } from 'redux';
import messageReducer from './message/reducers';
import counterReducer from './counter/reducers';
import themeReducer from './theme/reducers';
import productsReducer from './products/reducers';

const reducers = {
  message: messageReducer,
  counter: counterReducer,
  theme: themeReducer,
  products: productsReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
