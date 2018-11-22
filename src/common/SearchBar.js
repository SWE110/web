// PROPS 
// size = "expanded" or "narrow"

import React, { Component } from 'react'
import { recipeActions } from '../actions'
import { connect } from 'react-redux'
class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: 'Unchanged' }
  }
  updateSearchTerm(e) {
    this.setState({ searchTerm: e.target.value })

  }

  submitSearch() {
    this.props.dispatch(recipeActions.getRecipeByWords(this.state.searchTerm))
  }
  render() {
    return (
      <div className="field has-addons">
        <div className={this.props.size === 'expanded' ? 'control is-expanded' : 'control is-narrow'}>
          <input className="input" type="search" onChange={(e) => this.updateSearchTerm(e)} placeholder="» » » » » » find me « « « « « «">
          </input>
        </div>
        <div className="control">
          <a className="button is-info" onClick={() => this.submitSearch()}>Search</a>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { recipe } = state
  return {
    recipe
  }
}

export default connect(mapStateToProps)(SearchBar)
// export default SearchBar;