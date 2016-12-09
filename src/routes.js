import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HelloHome from './components/HelloHome';
import App from './App';
import LandingPage from './components/LandingPage';

export default (
     <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="home" component={HelloHome} />
        <Route path="home" component={HelloHome} />
        <Route path="home" component={HelloHome} />
    </Route>
//   <Route path="/" component={App}>
  
//     </Route>
//     <Route path="/" component={LandingPage} />
)

    // <Route path="signup" component={SignupPage} />