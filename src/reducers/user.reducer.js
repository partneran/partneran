import {
    SIGN_UP
} from '../constants/actionType'

const userReducer = (state={}, action) => {
    switch(action.type){
        case SIGN_UP:
            return {
                ...state,
                user: action.payload.user,
                status: false
            }
        default:
            return state

    }
}