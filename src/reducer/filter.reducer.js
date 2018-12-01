import { filterConstants } from '../_constants'

export function filter(state = { filter: '' }, action) {
  switch (action.type) {
  case filterConstants.FILTER_REQUEST:
    return {
      ...state,
      filter: ''
    }
  case filterConstants.FILTER_SUCCESS:
    return {
      ...state,
      filter: action.filter
    }
  case filterConstants.FILTER_REJECT:
    return {
      ...state,
      err: action.error,
      msg: '',
      filter: ''
    }
  default:
    return state
  }
}
