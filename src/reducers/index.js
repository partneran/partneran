import { combineReducers } from 'redux'

// import all available reducers
import counter from './counter'
import user from './user.reducer'
import ideas from './ideas'
import idea from './idea'
import categories from './categories'



const reducers = combineReducers({ counter, user, ideas, idea, categories })

export default reducers
