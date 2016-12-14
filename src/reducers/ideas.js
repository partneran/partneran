import { ADD_IDEA, LOAD_ALL_IDEAS } from '../constants/actionTypes'

const ideas = (state = [], action) => {
    console.log('this is comming from action', action)
    switch(action.type){
        case ADD_IDEA:
            return [
                {
                    title: action.payload.title,
                    picture: action.payload.picture,
                    video: action.payload.video,
                    category: action.payload.category
                },
                    ...state
                ]
        case LOAD_ALL_IDEAS:
            return state
        default:
            return state
    }
}

export default ideas