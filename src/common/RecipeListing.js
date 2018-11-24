import React from 'react'
import ReactStars from 'react-stars'
import './RecipeListing.scss'

import { Link } from 'reactbulma'

const RecipeListing = (props) => {
  return (
    <div className="recipe-box">
      <div className="card-image">
        <a href={props.onClickUrl}><img src={props.recipe.image[0]} /></a>
      </div>
      <div className="recipe-title">
        <a href={props.onClickUrl}>{props.recipe.name}</a>
      </div>
      <div>Posted by {props.recipe.author}</div>

      <div className="rating-wrap">
        <ReactStars count={5} value={props.recipe.aggregate_rating} edit={false} size={30} />
      </div>

    </div>
  )
}
export default RecipeListing