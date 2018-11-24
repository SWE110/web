import { recipe } from './example'
import request from 'request-promise'
const SEARCH_URL = 'http://104.248.220.214:3000/search'

export default {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipeByTitle    
}

function getRecipeByTitle(words) {
  return fetch(SEARCH_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: words
    })
  })
    .catch(err => console.log('Error with search request to server'))
    .then(resp => resp.json())
    .then(data => {return data})
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
