import { SIGN_UP, 
        LOG_IN, 
        FORGET_PASSWORD, 
        NEW_PASSWORD } from '../constants/actionTypes'

import axios from 'axios';
import { browserHistory } from 'react-router';
import Auth from '../helpers/token';

const uri = 'https://partneran-484c5.firebaseio.com/user'

export const signup = user => 
    ({
        type: SIGN_UP,
        user:  axios
                .post(uri, {
                    user
                })
                .then(res => {
                    Auth.authenticateUser(res)
                    browserHistory.push('/explore')
                })
                .catch(err => console.log(err))
    })

export const login = (user) => 
    ({
        type: LOG_IN,
        user
    })

export const forgetPassword = (email) => 
    ({
        type: FORGET_PASSWORD,
        email
    })

export const newPassword = (password) => 
    ({
        type: NEW_PASSWORD,
        password
    })