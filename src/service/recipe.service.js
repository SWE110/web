import { recipe } from './example'
import request from 'request-promise'

export default {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipeByWords    
}

function getRecipeByWords(words) {
  return recipe
}

function getRecipes(user) {
    
}

function getRecipe(recipeId) {
  if (recipeId) {
    return request(`${global.CONFIG.BACKEND.ADDRESS}/recipe/${recipeId}`).then((json) => {
      return JSON.parse(json)
    })
  }
}

function createRecipe(user, recipe) {

}

function deleteRecipe(user, recipeId) {

}
