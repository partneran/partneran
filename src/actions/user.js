require('dotenv').config();
import { SIGN_UP,
        LOG_IN,
        FORGET_PASSWORD,
        NEW_PASSWORD,
        EDIT_PROFILE} from '../constants/actionTypes'

import axios from 'axios';
import request from 'superagent';
import { browserHistory } from 'react-router';
import Auth from '../helpers/token';

const uri =`${process.env.SERVER_URL}api/`


const signUser = user =>
 ({
   type: 'SIGNUP_USER'
 })

const signupSuccess = user =>
 ({
   type: 'SIGN_UP_SUCCESS',
   user: user
 })

const signupFailure = () =>
 ({
   type: 'SIGN_UP_FAILURE'
 })

export const signup = (user) => {
   // console.log('above first dispatch', idea)
   return dispatch => {
       console.log(user)
       dispatch(signUser(user))
       return request
               .post(uri+'auth/signup')
               .set('Accept', 'application/json')
               .type('form')
               .send({
                   name: user.name,
                   email: user.email,
                   password: user.password
               })
               .end((err, res) => {
                   if(err){
                       console.log(err);
                       dispatch(signupFailure())
                   } else {
                       browserHistory.push(`/login`)
                       dispatch(signupFailure(res.body))

                   }
               })
   }
}

// export const signup = user =>
//     ({
//         type: SIGN_UP,
//         user:  axios
//                 .post(uri+'auth/signup', {
//                     name: user.name,
//                     email: user.email,
//                     password: user.password
//                 })
//                 .then(res => {
//                     Auth.authenticateUser(res)
//                     browserHistory.push('/explore')
//                 })
//                 .catch(err => console.error(err))
//     })

// export const login = (user) =>
//     ({
//         type: LOG_IN,
//         user: axios
//                 .post(uri+'auth/login', {
//                     email: user.email,
//                     password: user.password
//                 })
//                 .then(res => {
//                   console.log(res);
//                     Auth.authenticateUser(res)
//                     browserHistory.push('/')
//                 })
//                 .catch(err => console.log(err))
//     })
const loginUser = user =>
  ({
    type: 'LOGIN_USER'
  })

const loginSuccess = user =>
  ({
    type: 'LOGIN_USER_SUCCESS',
    user: user
  })

const loginFailure = () =>
  ({
    type: 'LOGIN_USER_FAILED'
  })

export const login = (user) => {
    // console.log('above first dispatch', idea)
    return dispatch => {
        dispatch(loginUser(user))
        return request
                .post(uri+'auth/login')
                .set('Accept', 'application/json')
                .type('form')
                .send({
                    email: user.email,
                    password: user.password
                })
                .end((err, res) => {
                    if(err){
                        console.log(err);
                        dispatch(loginFailure())
                    } else {
                        localStorage.setItem('token', res.body.token)
                        // browserHistory.push(`/explore`)
                        dispatch(loginSuccess(res.body))

                    }
                })
    }
}

// export const forgetPassword = (email) =>
//     ({
//         type: FORGET_PASSWORD,
//         email: axios
//                 .post(uri+'users/forgot', { email })
//                 .then(res => {
//                     browserHistory.push('/')
//                 })
//                 .catch(err => console.error(err))
//     })

// forget password

const forgetPasswordFetch = email =>
  ({
    type: 'FORGET_PASSWORD'
  })

const forgetPasswordSuccess = email =>
  ({
    type: 'FORGET_PASSWORD_SUCCESS',
    email: email
  })

const forgetPasswordFailure = () =>
  ({
    type: 'FORGET_PASSWORD_FAILED'
  })

export const forgetPassword = email => {
    // console.log('above first dispatch', idea)
    return dispatch => {
        dispatch(forgetPasswordFetch(email))
        return request
                .post(uri+'auth/forgot')
                .set('Accept', 'application/json')
                .type('form')
                .send({
                    email
                })
                .end((err, res) => {
                    if(err){
                        console.log(err);
                        dispatch(forgetPasswordFailure())
                    } else {
                        browserHistory.push(`/login`)
                        dispatch(forgetPasswordSuccess(res.body))

                    }
                })
    }
}

export const newPassword = (password, User) =>
    ({
        type: NEW_PASSWORD,
        password: axios
                    .post(uri+'users/password', {
                      email: Auth.getUser().email || User.email,
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
              photo_URL: User.imagePreviewUrl || Auth.getUser().photo_URL,
              short_bio: User.bio
            })
            .end((err, res) => {
              if (err) {
                console.log(err);
              } else {
                console.log('this is response from backend', res)
                Auth.setToken(res.body)
                browserHistory.push('/profile')
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
              console.log('res', res.body)
              localStorage.removeItem('token')
              localStorage.setItem('token', res.body.token)
              router.replace('/')
            }
          })
  }
}
