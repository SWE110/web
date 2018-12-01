import { userConstants } from '../_constants'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

export function users(state = { loggedIn: false, loggingIn: false, loginFailed: false, username: '', password: '', authstring: '', test: 'init test val' }, action) {
  switch (action.type) {

  case userConstants.LOGIN_REQUEST:
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

  case userConstants.REGISTER_REQUEST:
    return {
      registering: true,
      registered: false,
      registerFailed: false,
      //test: JSON.stringify(action, null, 4),
      loggingIn: false,
      loggedIn: false,
      loginFailed: false,
    }

  case userConstants.REGISTER_SUCCESS:
    return {
      registering: false,
      registered: true,
      registerFailed: false,
      loggingIn: false,
      loggedIn: false,
      loginFailed: false,
    }

  case userConstants.REGISTER_FAILURE:
    return {
      registering: false,
      registered: false,
      registerFailed: true,
      registerError: action.data.registerError,
      loggingIn: false,
      loggedIn: false,
      loginFailed: false,
    }

  default:
    return state

  }
}