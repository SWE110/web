import React, {Component} from 'react'
import Recipe from '../recipe/Recipe'
import { connect } from 'react-redux'

import { recipeActions } from '../actions'

class RecipePage extends Component {
  constructor(props) {
    super(props)
    const { recipeId } = props.match.params
    this.state = {
      recipeId
    }

    this.props.dispatch(recipeActions.getRecipe(recipeId))
  }

  render() {
    const { recipe } = this.props
    if (recipe.hasRecipe) {
      return <Recipe recipe={recipe.recipe}/>
    }
    return (
      <div> Loading... </div>
    )
  }
}

function mapStateToProps(state) {
  const { recipe } = state
  return {
    recipe
  }
}

export default connect(mapStateToProps)(RecipePage)