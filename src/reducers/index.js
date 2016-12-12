import { combineReducers } from 'redux'

// import all available reducers
import counter from './counter'
import user from './user.reducer'
import ideas from './ideas'



const reducers = combineReducers({ counter, user, ideas })

export default reducers

