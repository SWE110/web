import { recipe } from './example'
import request from 'request-promise'

export default {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipeByTitle    
}

function getRecipeByTitle(words) {
  const uri = `${global.CONFIG.BACKEND.ADDRESS}/search`
  return request({
    method: 'post',
    uri,
    body: JSON.stringify({
      title: words
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((json) => JSON.parse(json))
}

function getRecipes() {
  return request(`${global.CONFIG.BACKEND.ADDRESS}/recipe`).then((json) => JSON.parse(json))
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
