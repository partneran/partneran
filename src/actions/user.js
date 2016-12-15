import { SIGN_UP,
        LOG_IN,
        FORGET_PASSWORD,
        NEW_PASSWORD,
        EDIT_PROFILE} from '../constants/actionTypes'

import axios from 'axios';
import request from 'superagent';
import { browserHistory } from 'react-router';
import Auth from '../helpers/token';

const uri = 'http://localhost:8080/api/'


export const signup = user =>
    ({
        type: SIGN_UP,
        user:  axios
                .post(uri+'auth/signup', {
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
                .then(res => {
                    Auth.authenticateUser(res)
                    browserHistory.push('/explore')
                })
                .catch(err => console.error(err))
    })

export const login = (user) =>
    ({
        type: LOG_IN,
        user: axios
                .post(uri+'auth/login', {
                    email: user.email,
                    password: user.password
                })
                .then(res => {
                  console.log(res);
                    Auth.authenticateUser(res)
                    browserHistory.push('/')
                })
                .catch(err => console.log(err))
    })

export const forgetPassword = (email) =>
    ({
        type: FORGET_PASSWORD,
        email: axios
                .post(uri+'users/forgot', { email })
                .then(res => {
                    browserHistory.push('/')
                })
                .catch(err => console.error(err))
    })

export const newPassword = (password, User) =>
    ({
        type: NEW_PASSWORD,
        password: axios
                    .post(uri+'users/password', {
                      email: Auth.getUser().email,
                      new_password: password
                    })
                    .then(res => { browserHistory.push('/')})
                    .catch(err => console.error(err))
    })

export const editProfile = (User) => {
  var formData = new FormData();
  // for (var key in User) {
  //   formData.append(key, User[key]);
  // }
  // console.log(User.photo_URL);
  for (var key in User.photo_URL) {
    // is the item a File?
    if (User.photo_URL.hasOwnProperty(key) && User.photo_URL[key] instanceof File) {
      formData.append(key, User.photo_URL[key]);
    }
  }
  // formData.append('name', User.name);
  // formData.append('email', User.email);
  // formData.append('short_bio', User.bio);
  // console.log('Form Data: ' + JSON.stringify(formData));
  // console.log(User);
  return {
    type: EDIT_PROFILE,
    user: request.put(uri+'users/'+User.UserId)
            .type('form')
            .send({
              name: User.name,
              email: User.email,
              photo_URL: User.imagePreviewUrl,
              short_bio: User.bio
            })
            .end((err, res) => {
              if (err) {
                console.log(err);
              } else {
                res => { browserHistory.push('/profile')}
              }
            })

    // axios
    //         .put(uri+'users/'+User.UserId, {
    //           name: User.name,
    //           email: User.email,
    //           photo_URL: User.photo_URL,
    //           short_bio: User.bio
    //         },
    //         { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
    //         .then(res => { browserHistory.push('/profile')})
    //         .catch(err => console.error(err))
  }
}


export const verifiedUser = (token, router) => {
  return dispatch => {
    return request
          .get(uri+'auth/verification/'+token)
          .set('Accept', 'application/json')
          .end((err, res) => {
            if(err){
              console.log(err);
            }else{
              router.replace('/')
            }
          })
  }
}
