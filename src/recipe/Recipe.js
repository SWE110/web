import React, { Component } from 'react'
import { Container, Content, Card, Hero, Title, SubTitle, Icon } from 'reactbulma'
import _ from 'underscore'

class Recipe extends Component {

  constructor(props) {
    super(props)
    // console.log(props.params)
    // const { user } = props.params
  }

  componentDidMount() {
    // this.setState(recipe)
  }
  
  render() {
    return (
      <Container className="recipe-container">
        <Card className="recipe-card">
          <Hero>
            <Hero.Body>
              <Container className="center title">
                <Title>
                  {this.state.name}
                </Title>
                <SubTitle>
                  {this.state.description}
                </SubTitle>
              </Container>
            </Hero.Body>
          </Hero>
          <Container className="info-section">
            <Card className="info left">
              <Card.Header.Title>
                Ingredients
              </Card.Header.Title>
              <Card.Content>
                {_.map(this.state.recipeIngredient, (item) => {
                  return <p>{item}</p>
                })}
              </Card.Content>
            </Card>
            <Card className="info left">
              <Card.Header.Title>
               Nutrition Facts 
              </Card.Header.Title>
              <Card.Content>
                {this.state.nutrition.calories}
              </Card.Content>
            </Card>
          </Container>

          <Container>
            {this.state.recipeInstructions.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    {item.text}
                  </Card.Content>
                </Card>
              )
            })}
          </Container>
        </Card>

      </Container>
    )
  }
}

export default Recipe