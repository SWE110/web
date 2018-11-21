import { recipe } from './example'
import request from 'request-promise'

const ip = 'http://104.248.220.214:3000'

export default {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe    
}

function getRecipes(user) {
    
}

function getRecipe(recipeId) {
  if (recipeId) {
    return request(`${ip}/recipe/${recipeId}`).then((json) => {
      return JSON.parse(json)
    })
  }
}

function createRecipe(user, recipe) {

}

function deleteRecipe(user, recipeId) {

}
