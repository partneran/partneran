// export default idea = (state = 0, action) => {
//     switch(action.type) {
//         case 'INC':
//             return state + 1;
//         default:
//             return state
//     }
// }
import v4 from 'uuid/v4';
import {
    ADD_IDEA
} from '../constants/actionTypes'

const idea = (state = {}, action) => {
    switch(action.type){
        case ADD_IDEA:
            return {
                idea_id: v4(),
                title: action.payload.title,
                picture: action.payload.picture,
                video: action.payload.video,
                category: action.payload.category
            }
        default:
            return state
    }
}

const ideas = (state = [], action) => {
    switch(action.type){
        case ADD_IDEA:
            return [
                ...state,
                idea(undefined, action)
            ]
        default:
            return state;
    }
}

export default ideas