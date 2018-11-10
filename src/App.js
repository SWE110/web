import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import LoginPage from './container/LoginPage'
import ForgotPasswordPage from './container/ForgotPasswordPage'

// Import once everything is implemented
const HomePage = () => <div>Home Page</div>
const RecipePage = ({ match }) => (
  <div>
    Recipe Page<hr />
    { (match.params ? JSON.stringify(match.params) : null) }
  </div>
)
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
            <Route exact path="/" component={HomePage} />

            {/* View Recipes */}
            <Route exact path="/recipes" component={RecipePage} />
            <Route exact path="/recipes/:user" component={RecipePage} />
            <Route exact path="/recipes/:user/:recipeId" component={RecipePage} />

            {/* Submit Recipe: Protected */}
            <Route exact path="/recipes/submit" component={RecipePage} />

            {/* Login/Register/Reset Password/Logout */}
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={TodoPage} />
            <Route exact path="/reset" component={ForgotPasswordPage} />
            <Route exact path="/logout" component={TodoPage} />

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
