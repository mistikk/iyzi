import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../modules';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
