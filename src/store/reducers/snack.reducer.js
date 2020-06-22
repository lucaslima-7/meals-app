import { OPEN_SNACK, CLOSE_SNACK } from '../actions/snack.actions'

const initialState = {
  status: false
}

const snack = (state = initialState, action) => {
  switch (action.type) {

    case OPEN_SNACK:
      const open = action.status
      return {
        ...state,
        status: open
      }

    case CLOSE_SNACK:
      const closed = action.status
      return {
        ...state,
        status: closed
      }

    default:
      return state
  }
}

export default snack