import { SIGN_UP, LOG_IN } from '../constants/actionTypes'

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