import {
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE
} from '../constants/actionTypes'


const idea = (state = [], action) => {
    switch(action.type){

      case ADD_COMMENT_SUCCESS:
        console.log(state);
        return {}


      case ADD_COMMENT_FAILURE:
        return state

      default:
          return state;
    }
}

export default idea
