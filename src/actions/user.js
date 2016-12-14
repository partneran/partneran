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
                    browserHistory.push('/')
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
                      email: User.email,
                      new_password: password
                    })
                    .then(res => { browserHistory.push('/')})
                    .catch(err => console.error(err))
    })

export const editProfile = (User) => {
  var formData = new FormData();
  for (var key in User) {
    formData.append(key, User[key]);
  }
  // for (var key in User.photo_URL) {
  //   // is the item a File?
  //   if (User.photo_URL.hasOwnProperty(key) && User.photo_URL[key] instanceof File) {
  //     formData.append(key, User.photo_URL[key]);
  //   }
  // }
  console.log(User);
  ({
    type: EDIT_PROFILE,
    user: request.put(uri+'users/'+User.UserId)
            .type('form')
            .send(formData)
            //   {
            //   name: User.name,
            //   email: User.email,
            //   photo_URL: formData,
            //   short_bio: User.bio
            // }
          // )
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
  })
}
