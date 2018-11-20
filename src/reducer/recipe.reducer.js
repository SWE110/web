import { recipeConstants } from '../_constants'

const initialState = {
  gettingRecipe: false,
  hasRecipe: false,
  recipe: {}
}

export function recipe(state = initialState, action) {
  switch (action.type) {
  case recipeConstants.GET_REQUEST:
    return {
      gettingRecipe: true
    }
  case recipeConstants.GET_SUCCESS:
    return {
      hasRecipe: true,
      gettingRecipe: false,
      recipe: action.recipe
    }
  case recipeConstants.GET_FAILURE:
    return {

    }
  default:
    return state
  }
}
