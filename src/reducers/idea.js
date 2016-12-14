import {
    LOAD_ONE_IDEA,
    LOAD_ONE_IDEA_SUCCESS,
    LOAD_ONE_IDEA_FAILURE
} from '../constants/actionTypes'


const idea = (state = null, action) => {
    switch(action.type){

      case LOAD_ONE_IDEA:
        return {}

      case LOAD_ONE_IDEA_SUCCESS:
      // console.log(action.one_idea);
        return action.idea

      case LOAD_ONE_IDEA_FAILURE:
        return state

      default:
          return state;
    }
}

export default idea
