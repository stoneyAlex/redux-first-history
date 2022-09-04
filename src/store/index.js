import {createStore, applyMiddleware} from 'redux'
import combinedReducer from './reducers'
import {createReduxHistory, routerMiddleware} from '../history'

export const store = applyMiddleware(routerMiddleware)(createStore)(combinedReducer)
export const history = createReduxHistory(store)
window.store = store