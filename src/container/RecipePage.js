import React, {Component} from 'react'
import Recipe from '../recipe/Recipe'

import { recipe } from '../recipe/example'

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
      <div>
        {/* <Recipe recipe={recipe}/> */}
      </div>
    )
  }
}

export default RecipePage