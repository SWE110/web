import React, {Component} from 'react'
import Recipe from '../recipe/Recipe'

import { recipeService } from '../service'

class RecipePage extends Component {
  constructor(props) {
    super(props)
    const { recipeId, user} = props.match.params
    this.state = {
      recipeId,
      user
    }
  }

  render() {
    return (
      <Recipe recipe={recipeService.getRecipe()}/>
    )
  }
}

export default RecipePage