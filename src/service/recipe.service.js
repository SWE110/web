import { recipe } from './example'
import request from 'request-promise'

export default {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipeByTitle    
}

function getRecipeByTitle(word, start, count, filter) {
  const uri = `${global.CONFIG.BACKEND.ADDRESS}/search`
  return request({
    method: 'post',
    uri,
    body: JSON.stringify({
      title: word,
      start,
      count,
      order: filter || 'meal_id'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((json) => JSON.parse(json))
}

function getRecipes(obj) {
  let start, count
  if (obj) {
    start = obj.start || 0
    count = obj.count || 6
  }
  return request(`${global.CONFIG.BACKEND.ADDRESS}/recipe?start=${start}&count=${count}`).then((json) => JSON.parse(json))

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
