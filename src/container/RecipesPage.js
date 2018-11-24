import React, {Component} from 'react'
import _ from 'underscore'
import Recipe from '../recipe/Recipe'
import { connect } from 'react-redux'
import { Header, RecipeListing } from '../common'

import { recipeActions } from '../actions'
import './RecipesPage.scss'

class RecipesPage extends Component {
  constructor(props) {
    super(props)
    const { recipeId } = props.match.params
    this.state = {
      recipeId
    }

    this.props.dispatch(recipeActions.getRecipes())
  }

  render() {
    const { recipes } = this.props
    
    return (
      <div> 
        <Header />
        <div className="main recipe-container">
          {recipes.hasRecipes &&
          _.map(recipes.recipes, (recipe, id) => {
            return <RecipeListing onClickUrl={recipe.meal_id} key={id} recipe={recipe}/>
          })
          }
          {!recipes.hasRecipes &&
          <div>Loading...</div>
          }
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

export default connect(mapStateToProps)(RecipesPage)