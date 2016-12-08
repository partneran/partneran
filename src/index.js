import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { createStore } from 'redux';
// import reducers from './reducers';

const reducers = (state=0, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);