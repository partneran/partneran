import {
  ADD_COMMENTS_SUCCESS,
  ADD_COMMENTS_FAILURE
} from '../constants/actionTypes'


const idea = (state = null, action) => {
    switch(action.type){

      case ADD_COMMENTS_SUCCESS:
        return {}


      case ADD_COMMENTS_FAILURE:
        return state

      default:
          return state;
    }
}

export default idea
