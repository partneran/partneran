import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import promise from 'redux-promise'
import reducer from './reducers'


const middleware = applyMiddleware(thunk, promise)

export default createStore(reducer, middleware)
