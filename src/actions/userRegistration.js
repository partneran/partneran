import { SIGN_UP } from '../constants/actionTypes'

export const signup = (user) => 
    ({
        type: SIGN_UP,
        user
    })