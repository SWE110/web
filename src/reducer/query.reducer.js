import { queryConstants } from '../_constants'

export function query(state = { querying: false, word: '' }, action) {
  switch (action.type) {
  case queryConstants.QUERY_REQUEST:
    return {
      querying: true
    }
  case queryConstants.QUERY_SUCCESS:
    return {
      querying: false,
      word: action.word
    }
  case queryConstants.QUERY_FAILURE:
    return {
      err: action.error,
      msg: '',
      querying: false
    }
  default:
    return state
  }
}
