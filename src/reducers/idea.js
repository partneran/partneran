import {
    LOAD_ONE_IDEA,
    LOAD_ONE_IDEA_SUCCESS,
    LOAD_ONE_IDEA_FAILURE,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    EDIT_IDEA_SUCCESS,
    FETCH_IDEA
} from '../constants/actionTypes'

// import { assign } from 'lodash'


const idea = (state = {Comments : []}, action) => {
    switch(action.type){

      case LOAD_ONE_IDEA:
        return state

      case LOAD_ONE_IDEA_SUCCESS:
      // console.log(action.idea);
        return action.idea

      case LOAD_ONE_IDEA_FAILURE:
        return state

      case ADD_COMMENT_SUCCESS:
        let newState = {
          ...state
        }
        newState.Comments.unshift(action.comment)
        return newState

      case EDIT_IDEA_SUCCESS:
        return action.editedIdea

      case FETCH_IDEA:
        // console.log(action.dataIdea);
        return action.dataIdea


      case ADD_COMMENT_FAILURE:
        return state

      default:
          return state;
    }
}

export default idea
