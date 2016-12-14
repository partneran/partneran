import { SHOW_LOADING_BAR, HIDE_LOADING_BAR } from '../constants/actionTypes'

const ideas = (state = {loading:false}, action) => {
    switch(action.type){
        case SHOW_LOADING_BAR:
          return{
                  loading: true
              }

        case HIDE_LOADING_BAR:
          return{
                  loading: false
              }

        default:
            return state
    }
}

export default ideas
