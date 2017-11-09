// Constant definitions
import { COOKIE_ACCEPT } from '../constants'

// Node_Modules
import objectAssign from 'object-assign'

// Initial State for Cookie Bar
const initialState = {
  accept: false
}

const cookiebar = (state = initialState, action) => {
  switch (action.type) {
    case COOKIE_ACCEPT:
      return objectAssign({}, state, action.data)
    default:
      return state
  }
}

export default cookiebar
