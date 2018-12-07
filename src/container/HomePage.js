/* eslint-disable linebreak-style,linebreak-style */
import React, {Component} from 'react'

import { Header, SearchBar, RecipeListing }from '../common/'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'underscore'

import { faJedi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactbulma'
import { recipeActions } from '../actions'
import { userService } from '../service'
import { Profile} from '../common'

import './HomePage.scss'
import './RecipesPage.scss'

function displayProfile(props) {
  const isLoggedIn = props.loggedIn
  if(isLoggedIn) {
    return (<Link className="link" to="/profile">Profile</Link>)
  }
}

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.props.dispatch(recipeActions.getRecipes({start: 0, count: 3}))
  }

  render() {
    const { recipes } = this.props
    const loggedIn = localStorage.loggedIn
    return (
      <div>
        <div className="home-container">
          {/* <Header/> */}
          <div className="home-header">
            <div className="spacing"></div>
            <div className="links">
              {loggedIn ? <Link className="link" to="/profile">{localStorage.getItem('username')}</Link> : <Link className="link" to="/login">Login</Link>}
              {loggedIn ? <Link className="link" to="/logout">Logout</Link> : <Link className="link" to="/register">Register</Link>}
            </div>
          </div>
          <div className="main home">
            <div className="home-logo">
              <FontAwesomeIcon icon={faJedi}/>
            </div>
            <h1 className="logo">
            yummy
            </h1>
            <h2 className="bold">
            Find recipes by name or ingredient
            </h2>
          
            <div>
              <SearchBar />
            </div>

          </div>
        </div>
        <div className="home-body">
          <h1>Recommendations for you!</h1>
          <div className="recipe-container">
            {recipes.hasRecipes &&
              _.map(recipes.recipes, (recipe, id) => {
                return <RecipeListing key={id} onClickUrl={`recipes/${recipe.meal_id}`} recipe={recipes.recipes[id]} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { recipes, users } = state
  return {
    recipes,
    users,
  }
}

export default connect(mapStateToProps)(HomePage)