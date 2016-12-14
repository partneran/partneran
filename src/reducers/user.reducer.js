import {
    SIGN_UP,
    LOG_IN,
    EDIT_PROFILE
} from '../constants/actionTypes'

const user = (state={}, action) => {
    switch(action.type){
        case SIGN_UP:
        console.log(action);
            return {
                ...state,
                user: action.payload,
                verify: false
            }
        case LOG_IN:
            return {
                ...state,
                user: action.payload,
            }
        case EDIT_PROFILE:
            return {
              ...state,
              user: action.payload,
            }
        default:
            return state

    }
}

export default user
