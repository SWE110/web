import { recipeConstants } from '../_constants'

export function recipe(state = {gettingRecipe: false, hasRecipe: false, recipe: {}}, action) {
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
      err: action.error,
      msg: ''
    }
  default:
    return state
  }
}

export function recipes(state = {gettingRecipes: false, hasRecipes: false, recipes: {}}, action) {
  switch (action.type) {
  case recipeConstants.GET_ALL_REQUEST:
    return {
      gettingRecipes: true
    }
  case recipeConstants.GET_ALL_SUCCESS:
    return {
      hasRecipes: true,
      gettingRecipes: false,
      recipes: action.recipes
    }
  case recipeConstants.GET_ALL_FAILURE:
    return {
      err: action.error
    }
  default: return state
  }
}