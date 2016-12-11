import Auth from './token'
// import { browserHistory } from 'react-router';

export function isLoggedIn() {
  if(!Auth.getToken()){
    // browserHistory.push('/login')
    return false
  }
}