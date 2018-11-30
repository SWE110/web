import React, {Component} from 'react'
import _ from 'underscore'
import Recipe from '../recipe/Recipe'
import { connect } from 'react-redux'
import { Header, RecipeListing, TopButton } from '../common'

import { recipeActions } from '../actions'
import './RecipesPage.scss'

class RecipesPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      start: 0,
      count: 6,
      listening: false
    }
  }

  componentWillMount() {
    const { recipes } = this.props
    if (!recipes.hasRecipes && !recipes.gettingRecipes) {
      this.props.dispatch(recipeActions.getRecipes({start: this.state.start, count: this.state.count}))
      this.setState({
        start: this.state.count,
        count: this.state.count + 6
      })
    }
  }

  componentDidMount() {
    const { query } = this.props
    if (query && !query.word) {
      window.addEventListener('scroll', this.handleScroll)
      this.setState({
        listening: true
      })
    }
  }

  componentWillUnmount() {
    const { listening } = this.state
    if (listening)
      window.removeEventListener('scroll', this.handleScroll)
  }

  // https://hashnode.com/post/how-to-get-scroll-position-in-reactjs-to-add-class-or-style-on-the-whole-page-cj0i3io6100c04o53hsxyxtjb
  handleScroll = (e) => {
    const totalHeight = this.container.clientHeight
    const viewPort = window.innerHeight
    let supportPageOffset = window.pageXOffset !== undefined
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
    let scroll = {
      x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
      y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    }

    const percent = (scroll.y) / (totalHeight-viewPort)
    if (percent > 0.8) {
      this.load()
    }
  };

  load = () => {
    const { recipes } = this.props
    if (!recipes.gettingRecipes) {
      this.props.dispatch(recipeActions.getMoreRecipes({start: this.state.start, count: this.state.count}))
      this.setState({
        start: this.state.count,
        count: this.state.count + 6
      })
    }
  }


  render() {
    const { recipes } = this.props
    
    return (
      <div ref={ (container) => this.container = container } > 
        <Header />
        <TopButton />
        <div 
          className="main recipe-container">
          {recipes.hasRecipes &&
            _.map(recipes.recipes, (recipe, id) => {
              const url = `recipes/${recipe.meal_id}`
              return <RecipeListing onClickUrl={url} key={id} recipe={recipe}/>
            })
          }
          {!recipes.hasRecipes &&
            <div>Loading...</div>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { recipes } = state
  return {
    recipes
  }
}

export default connect(mapStateToProps)(RecipesPage)