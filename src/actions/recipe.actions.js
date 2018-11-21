import { recipeService } from '../service'
import { recipeConstants } from '../_constants'

export const recipeActions = {
  getRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe
}

function getRecipes(user) {
  return dispatch => {
    dispatch(request(user))
  }
    
  function request(user) { return { type: recipeConstants.GET_ALL_REQUEST, user } }
  function success(user) { return { type: recipeConstants.GET_ALL_SUCCESS, user } }
  function failure(error) { return { type: recipeConstants.GET_ALL_FAILURE, user } }
}

function getRecipe(recipeId) {
  return dispatch => {
    dispatch(request(recipeId))
    if (!recipeId) {
      dispatch(failure('Empty ID'))
    } else {
      recipeService.getRecipe(recipeId).then((recipe) => {
        dispatch(success(recipe))
      }).catch((err) => {
        dispatch(failure(err))
      })
    }
    // setTimeout(() => {
    //   const recipe = recipeService.getRecipe(user, recipeId)
    //   dispatch(success(recipe))
    // }, 3000)
  }
    
  function request(recipe) { return { type: recipeConstants.GET_REQUEST, recipe } }
  function success(recipe) { return { type: recipeConstants.GET_SUCCESS, recipe } }
  function failure(error) { return { type: recipeConstants.GET_FAILURE, error } }
}

function createRecipe(user, recipe) {
  return dispatch => {
    dispatch(request(user))
  }
    
  function request(user) { return { type: recipeConstants.CREATE_REQUEST, user } }
  function success(user) { return { type: recipeConstants.CREATE_SUCCESS, user } }
  function failure(error) { return { type: recipeConstants.CREATE_FAILURE, user } }
}

function deleteRecipe(user, recipeId) {
  return dispatch => {
    dispatch(request(user))
  }
    
  function request(user) { return { type: recipeConstants.DELETE_REQUEST, user } }
  function success(user) { return { type: recipeConstants.DELETE_SUCCESS, user } }
  function failure(error) { return { type: recipeConstants.DELETE_FAILURE, user } }
}