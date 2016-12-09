import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import LandingPage from './components/LandingPage';
import SignupPage from './components/Signup/SignupPage';
// import LoginPage from './components/LoginPage';
// import ExplorePage from './components/ExplorePage';
// import ProfilePage from'./components/ProfilePage';
// import IdeaPage from './components/IdeaPage';


export default (
     <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="signup" component={SignupPage} />
    </Route>
)

// <Route path="signup" component={Signup} />