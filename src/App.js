/* eslint-disable linebreak-style */
import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { PrivateRoute } from './common'
import { 
  // HomePage,
  LoginPage, 
  ForgotPasswordPage, 
  RegistrationPage,
  RegistrationConfirmationPage,
  RecipePage } from './container'

const TodoPage = () => <div>Todo Page</div>
const NullPage = () => <div>404 Page</div>

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="primary-layout">
        <Router>
          <Switch>
            {/* Home */}
            {/* <Route exact path="/" component={HomePage} /> */}

            {/* View Recipes */}
            <Route exact path="/recipes" component={RecipePage} />
            <Route exact path="/recipes/:user" component={RecipePage} />
            <Route exact path="/recipes/:user/:recipeId" component={RecipePage} />

            {/* Submit Recipe: Protected */}
            <PrivateRoute exact path="/recipe/submit" isAuthed={true} component={RecipePage} />

            {/* Login/Register/Reset Password/Logout */}
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/reset" component={TodoPage} />
            <Route exact path="/logout" component={TodoPage} />
            <Route exact path="/confirm" component={RegistrationConfirmationPage} />
            {/* Profile Page: Protected */}
            <Route exact path="/profile" component={TodoPage} />

            {/* Handle 404 */}
            <Route component={NullPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
