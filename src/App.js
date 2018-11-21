/* eslint-disable linebreak-style */
import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { PrivateRoute } from './common'
import { 
  // HomePage,
  LoginPage, 
  ForgotPasswordPage, 
  RegistrationPage,
  RegistrationConfirmationPage,
  ProfilePage,
  RecipePage,
} from './container'

import CreateRecipePage from './container/CreateRecipe'

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
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/createRecipe" component={CreateRecipePage} />
            {/* Handle 404 */}
            <Route component={NullPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
/* If you're reading this, you've been in a coma for almost 20 years now. We're trying a new technique. We don't know where this message will end up in your dream, but we hope it works. Please wake up, we miss you.*/
export default App
