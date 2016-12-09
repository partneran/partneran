import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HelloHome from './components/HelloHome';
import App from './App';
import LandingPage from './components/LandingPage';
// import SignupPage from './components/SignupPage';
// import LoginPage from './components/LoginPage';
// import ExplorePage from './components/ExplorePage';
// import ProfilePage from'./components/ProfilePage';
// import IdeaPage from './components/IdeaPage';


export default (
     <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
    </Route>
)

// <Route path="signup" component={Signup} />