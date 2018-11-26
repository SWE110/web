import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk' 

import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducer'

const enchancer = composeWithDevTools(
  applyMiddleware(logger, thunk)
)

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)