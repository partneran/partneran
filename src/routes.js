import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HelloHome from './components/HelloHome';
import App from './App';
import Signup from './components/Signup';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloHome} />
    <Route path="signup" component={Signup} />
  </Route>
)

    // <Route path="signup" component={SignupPage} />