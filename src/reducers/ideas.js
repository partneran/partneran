import { ADD_IDEA } from '../constants/actionTypes'

const ideas = (state = [], action) => {
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
        default:
            return state
    }
}

export default ideas