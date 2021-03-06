import {
    SIGN_UP,
    LOG_IN,
    EDIT_PROFILE,
    NEW_PASSWORD
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
          console.log('action from edit profile', action)
            return [
              {
                  name: action.payload.name,
                  email: action.payload.email,
                  short_bio: action.payload.short_bio,
                  photo_URL: action.payload.photo_URL
              },
                  ...state
            ]
            
        case 'FORGET_PASSWORD':
          return state

        case NEW_PASSWORD:
            return [
              {
                email: action.payload.email,
                password: action.payload.password
              },
              ...state
            ]
        default:
            return state

    }
}

export default user
