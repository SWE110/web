// PROPS 
// size = "expanded" or "narrow"

import React, { Component } from 'react'
import { recipeActions } from '../actions'
import { connect } from 'react-redux'

import './SearchBar.scss'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: 'Unchanged' }
    // this.submitSearch = this.submitSearch.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  updateSearchTerm(e) {
    this.setState({ searchTerm: e.target.value })
  }

  submitSearch() {
    this.props.dispatch(recipeActions.getRecipeByWords(this.state.searchTerm))
  }

  onKeyPress(e) {
    if (e.keyCode === 13) {
      this.submitSearch()
    }
  }
  
  render() {
    return (
      <div className="field has-addons">
        <div className={this.props.size === 'expanded' ? 'control is-expanded' : 'control is-narrow'}>
          <input className="input" onKeyDown={this.onKeyPress} type="search" onChange={(e) => this.updateSearchTerm(e)} placeholder="» » » » » » find me « « « « « «">
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