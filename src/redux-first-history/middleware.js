import {CALL_HISTORY_METHOD} from './actions'
export function createRouterMiddleware(history) {
  return function(middlewareAPI) {
    return function(next) {
      return function(action) {
        if(action.type !== CALL_HISTORY_METHOD) {
          return next(action)
        }
        const {method, args} = action.payload
        switch(method) {
          case 'push':
            history.push(...args)
            break;
          case 'replace':
            history.replace(...args)
            break
          default:
            break
        }
      }
    }
  }
}