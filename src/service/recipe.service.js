import { recipe } from './example'
import request from 'request-promise'

export default {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipeByTitle    
}

function getRecipeByTitle(words, start, count) {
  const uri = `${global.CONFIG.BACKEND.ADDRESS}/search`
  console.log(words, start, count)
  return request({
    method: 'post',
    uri,
    body: JSON.stringify({
      title: words,
      start,
      count
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
