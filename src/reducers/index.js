import { combineReducers } from 'redux'

// import all available reducers
import user from './user.reducer'
import ideas from './ideas'
import idea from './idea'
import loading from './loading'
import categories from './categories'



const reducers = combineReducers({user, ideas, idea, loading, categories })

export default reducers
