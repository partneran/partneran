import {
    SIGN_UP,
    LOG_IN,
    EDIT_PROFILE,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAILURE
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
            return [
              {
                  name: action.payload.name,
                  email: action.payload.email,
                  short_bio: action.payload.short_bio,
                  photo_URL: action.payload.photo_URL
              },
                  ...state
            ]
        default:
            return state

    }
}

export default user
