import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import LandingPage from './components/LandingPage';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage';
import ForgetPasswordPage from './components/ForgetPassword/ForgetPasswordPage';
import NewPasswordPage from './components/ForgetPassword/NewPasswordPage';
import CreateIdea from './components/Idea/CreateIdea';
import ProfilePage from './components/Profile';
import MainPage from './components/MainPage';
import IdeaDetail from './components/Idea/IdeaDetail';
import EditProfile from './components/EditProfile';
import EditPassword from './components/EditPassword';
import AllIdea from './components/Category/AllIdea';
// import ExplorePage from './components/ExplorePage';
// import ProfilePage from'./components/ProfilePage';
// import IdeaPage from './components/IdeaPage';


export default (
     <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path="forget-password" component={ForgetPasswordPage} />
        <Route path="verify-password/:token" component={NewPasswordPage} />
        <Route path="share-idea" component={CreateIdea} />
        <Route path="profile" component={ProfilePage} />
        <Route path="explore" component={MainPage}>
            <Route path="all-idea" component={AllIdea}/>
        </Route>
        <Route path="idea/:title" component={IdeaDetail} />
        <Route path="edit-profile" component={EditProfile} />
        <Route path="edit-password" component={EditPassword} />
    </Route>
)
