import {LOCATION_CHANGE} from './actions'

export const createRouterReducer = (history) => {
  const initialState = {
    location: history.location,
    action: history.action
  }
  return function(state = initialState, {type, payload}) {
    if(type === LOCATION_CHANGE) {
      return {...state, location: payload.location, action: payload.action}
    } else {
      return state
    }
  }
}