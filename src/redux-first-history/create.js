import {push, replace, locationChangeAction} from './actions'
import {createRouterReducer} from './reducer'
import {createRouterMiddleware} from './middleware'
export const createReduxHistoryContext = ({history}) => {
  const routerRedeucer = createRouterReducer(history)
  const routerMiddleware = createRouterMiddleware(history)
  const createReduxHistory = (store) => {
    store.dispatch(locationChangeAction(history.location, history.action))
    history.listen(({loaction, action}) => {
      store.dispatch(locationChangeAction(loaction, action))
    })
    return {
      ...history,
      push: (...args) => store.dispatch(push(...args)),
      replace: (...args) => store.dispatch(replace(...args)),
      // get location() {
      //   return store.getState().router.location
      // },
      // get action() {
      //   return store.getState().router.action
      // }
    }
  }
  return {
    routerRedeucer,
    routerMiddleware,
    createReduxHistory
  }
}