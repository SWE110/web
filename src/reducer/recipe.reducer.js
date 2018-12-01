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

export function recipes(
  state = {
    gettingRecipes: false, 
    hasRecipes: false, 
    recipes: []
  }
  , action) {
  switch (action.type) {
  case recipeConstants.GET_ALL_REQUEST:
  case recipeConstants.GET_MORE_REQUEST:
    return {
      ...state,
      gettingRecipes: true
    }
  case recipeConstants.GET_ALL_SUCCESS:
    return {
      ...state,
      hasRecipes: true,
      gettingRecipes: false,
      recipes: action.recipes
    }
  case recipeConstants.GET_MORE_SUCCESS:
    return {
      ...state,
      hasRecipes: true,
      gettingRecipes: false,
      recipes: (action.recipes)
      // recipes: state.recipes.concat(action.recipes)
    }
  case recipeConstants.GET_ALL_FAILURE:
  case recipeConstants.GET_MORE_FAILURE:
    return {
      ...state,
      err: action.error
    }
  default: return state
  }
}