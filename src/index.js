// React dependency
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider} from 'react-redux';

// Redux dependency
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

// internal dipendency
import routes from './routes';

const middleware = applyMiddleware(thunk, promise, logger())

const store = createStore(reducers, middleware)


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);