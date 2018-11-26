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

import './HomePage.scss'
import './RecipesPage.scss'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.props.dispatch(recipeActions.getRecipes())
  }

  render() {
    const { recipes } = this.props
    return (
      <div>
        <div className="home-container">
          {/* <Header/> */}
          <div className="home-header">
            <div className="spacing"></div>
            <div className="links">
              <Link className="link" to="/login">Login</Link>
              <Link className="link" to="/register">Register</Link>
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
                if (id < 3) {
                  return <RecipeListing key={id} onClickUrl={`recipes/${recipe.meal_id}`} recipe={recipes.recipes[id]} />
                }
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { recipes } = state
  return {
    recipes
  }
}

export default connect(mapStateToProps)(HomePage)