import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import idea from './idea';

const middleware = applyMiddleware(thunk, logger)

export const reducers = combineReducers({counter, middleware})

