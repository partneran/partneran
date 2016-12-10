import { SIGN_UP, LOG_IN, FORGET_PASSWORD, NEW_PASSWORD } from '../constants/actionTypes'

export const signup = (user) => 
    ({
        type: SIGN_UP,
        user
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