export const CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD'
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

export const locationChangeAction = (location, action) => {
  return {
    type: LOCATION_CHANGE,
    payload: {location, action}
  }
}

function updateLocation(method) {
  return (...args) => {
    return {
      type: CALL_HISTORY_METHOD,
      payload: {method, args}
    }
  }
}

export const push = updateLocation('push')
export const replace = updateLocation('replace')