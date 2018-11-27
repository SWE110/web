import React, { Component } from 'react'
import { Container, Content, Card, Hero, Title, SubTitle, Icon } from 'reactbulma'
import _ from 'underscore'

import './Recipe.css'

class Recipe extends Component {

  constructor(props) {
    super(props)
    this.state = this.props.recipe
  }

  componentDidMount() {
    // this.setState(recipe)
  }
  
  render() {
    const { name, image, desciption, 
      author, recipe_cuisine, recipe_yield,
      total_time } = this.state
    return (
      <div>
        <div className="recipe-if">
          <div className="recipe-img-container">
            {image && <img className="recipe-img" src={image[0]} />}
          </div>
          <div className="recipe-deetz">
            <h1 className="recipe-title">{name && name}</h1>
            {author && <div className="recipe-author">By {author}</div>}

            <div className="recipe-info">
              <div className="bold">Cuisine</div>
              {recipe_cuisine && recipe_cuisine}
            </div>

            <div className="recipe-info">
              <div className="bold">Serving</div>
              {recipe_yield && recipe_yield}
            </div>

            <div className="recipe-info">
              <div className="bold">Time</div>
              {total_time && total_time}
            </div>
            <hr/>

            <h2 className="recipe-desc">{desciption && desciption}</h2>
          </div>
        </div>
        <div className="ingredients">
          <h1>Ingredients</h1>
          {_.map(this.state.recipe_ingredient, (item) => {
            return <p>{item}</p>
          })}
        </div>
        <div className="instructions">
          <h1>Instructions</h1>
          {_.map(this.state.recipe_instructions, (item) => {
            return (
              <Card className="steps">
                <Card.Content>
                  {item}
                </Card.Content>
              </Card>
            )
          })}
        </div>
      </div>
    //     <div>
    //     </div>
    //   </Card>

    // </Container>
    )
  }
}

export default Recipe