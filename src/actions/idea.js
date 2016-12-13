import { ADD_IDEA,
        DELETE_IDEA,
        UPDATE_IDEA } from '../constants/actionTypes'

import axios from 'axios';
import { browserHistory } from 'react-router';
import Auth from '../helpers/token';

const uri = 'http://localhost:8080/api/ideas/'

export const addIdea = idea =>
  ({
    type: ADD_IDEA,
    idea:  axios
            .post(uri+'', {
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

export const signup = user =>
    ({
        type: SIGN_UP,
        user:  axios
                .post(uri+'signup', {
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
                .post(uri+'login', {
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
                .post(uri, { email })
                .then(res => {
                    browserHistory.push('/')
                })
                .catch(err => console.error(err))
    })

export const newPassword = (password) =>
    ({
        type: NEW_PASSWORD,
        password: axios
                    .post(uri, { password })
                    .then(res => {
                        browserHistory.push('/')
                    })
                    .catch(err => console.error(err))
    })
