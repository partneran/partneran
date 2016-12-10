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

// axios for calling server
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

// internal dipendency
import routes from './routes';

const client = axios.create({ 
  baseURL:'https://partneran-484c5.firebaseio.com/',
  responseType: 'json'
});

const middleware = applyMiddleware(thunk, promise, logger(), axiosMiddleware(client))

const store = createStore(reducers, middleware)



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);