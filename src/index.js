import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './index.scss'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'
import * as serviceWorker from './serviceWorker'

import CONFIG from './config.json'
global.CONFIG = CONFIG

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
