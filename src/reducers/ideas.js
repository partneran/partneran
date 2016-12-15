import { ADD_IDEA, LOAD_IDEAS_SUCCESS, DELETE_IDEA_SUCCESS, ADD_IDEA_SUCCESS } from '../constants/actionTypes'

const ideas = (state = [], action) => {
    switch(action.type){
        case ADD_IDEA:
            return [
                    ...state
                ]
        case ADD_IDEA_SUCCESS:
        return [
                {
                  ...action.idea
                },
                ...state
                ]
        case LOAD_IDEAS_SUCCESS:
          // console.log('reducer ideas', action.ideas);
            return action.ideas

        case DELETE_IDEA_SUCCESS:
          // console.log(state.filter(idea => idea.id != action.id));
          return state.filter(idea => idea.id != action.id)


        default:
            return state
    }
}

export default ideas
