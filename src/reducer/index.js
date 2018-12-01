import { combineReducers } from 'redux'

import { users } from './users.reducer'
import { recipe, recipes } from './recipe.reducer'
import { query } from './query.reducer'
import { filter } from './filter.reducer'

export default combineReducers({
  recipe, recipes, query, users, filter
})