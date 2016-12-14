import { combineReducers } from 'redux'

// import all available reducers
import counter from './counter'
import user from './user.reducer'
import ideas from './ideas'
import idea from './idea'
import loading from './loading'
import comment from './comment'
import categories from './categories'



const reducers = combineReducers({ counter, user, ideas, idea, loading, comment, categories })

export default reducers
