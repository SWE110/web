import { userConstants } from '../_constants'

export function users(state = { loggedIn: false, loggingIn: false, loginFailed: false, username: '', password: '', authstring: '', test: 'init test val' }, action) {
  switch (action.type) {

  case userConstants.LOGIN_REQUEST:
    console.log(action)
    return {
      loggingIn: true,
      loginFailed: false,
      username: action.data.username,
      password: action.data.password,
      authstring: action.data.authstring,
      test: JSON.stringify(action, null, 4),
    }

  case userConstants.LOGIN_SUCCESS:
    return {
      loggingIn: false,
      loggedIn: true,
      loginFailed: false,
      username: action.data.username,
      password: action.data.password,
      authstring: action.data.authstring,
      test: JSON.stringify(action, null, 4),
    }

  case userConstants.LOGIN_FAILURE:
    return {
      loggingIn: false,
      loggedIn: false,
      loginFailed: true,
      username: action.data.username,
      password: action.data.password,
      authstring: action.data.authstring,
      test: JSON.stringify(action, null, 4),
    }

  default:
    return state

  }
}