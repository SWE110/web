import { combineReducers } from 'redux'

import { users } from './users.reducer'
import { recipe, recipes } from './recipe.reducer'

export default combineReducers({
  recipe, recipes
})