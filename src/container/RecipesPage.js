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
  }

  componentWillMount() {
    const { recipes } = this.props
    if (!recipes.hasRecipes && !recipes.gettingRecipes) {
      this.props.dispatch(recipeActions.getRecipes())
    }
  }

  render() {
    const { recipes } = this.props
    
    return (
      <div> 
        <Header />
        <div className="main recipe-container">
          {recipes.hasRecipes &&
          _.map(recipes.recipes, (recipe, id) => {
            const url = `recipes/${recipe.meal_id}`
            return <RecipeListing onClickUrl={url} key={id} recipe={recipe}/>
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