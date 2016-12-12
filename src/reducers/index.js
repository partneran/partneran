import { combineReducers } from 'redux'

// import all available reducers
import counter from './counter'
import user from './user.reducer'
import ideas from './ideas'
import categories from './categories'



const reducers = combineReducers({ counter, user, ideas, categories })

export default reducers

