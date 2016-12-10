import {
    SIGN_UP
} from '../constants/actionTypes'

const user = (state={}, action) => {
    switch(action.type){
        case SIGN_UP:
            return {
                ...state,
                user: action.payload,
                status: false
            }
        default:
            return state

    }
}

export default user