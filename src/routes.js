import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HelloHome from './components/HelloHome';
import App from './App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloHome} />
  </Route>
)

    // <Route path="signup" component={SignupPage} />