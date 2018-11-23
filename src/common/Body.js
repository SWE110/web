/* eslint-disable linebreak-style,linebreak-style */
import React, {Component} from 'react'

import './Body.css'
import {Button, Level} from 'reactbulma'


import RecipeItemAsBox from '../recipe/RecipeItemAsBox'

class Body extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recName: '',
      dispRecipes: [{recName: ''}, {recName: ''}, {recName:''}, {recName: ''}],
      counter: 4
    }
  }

    handleScrollRecipe = () => {
      this.setState({
        counter: this.state.counter++,
        dispRecipes: this.state.dispRecipes.concat([{recName: ''}]).filter((s, inIdx) => inIdx !== 0)
      })
    }

    fillDisplay = () => {
      for( var i = 0; i < 5; i++) {
        this.state.dispRecipes.concat([{recName: ''}])
      }

    }
    render() {
      return (
        <span>
          <h1 className="body-width has-text-left">Your recommended recipes</h1>
          <div className="suggestion-bar">
            <Level className="body-width has-text-centered">
              {this.state.dispRecipes.map((recipe, idx) => (
                <RecipeItemAsBox imgUrl={recipe}/>
              ))}
            </Level>
            <Button className="suggestion-bar" onClick={this.handleScrollRecipe}> scroll </Button>
          </div>
        </span>

      )
    }

}

export default Body