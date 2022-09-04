import * as actionTypes from '../action-types'
let initialState = { number: 0 }
function counter(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return { number: state.number + 1 }
    case actionTypes.MINUS:
      return { number: state.number - 1 }
    default:
      return state;
  }
}

export default counter