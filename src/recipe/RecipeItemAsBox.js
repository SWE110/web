// Requires Bulma CSS to display properly
// Incoming props:
// title
// description
// onClickUrl
// imgUrl
// rating (1-5)
// postedBy
// Written by Andrew

import React from 'react'
import ReactStars from 'react-stars'
import './RecipeItemAsBox.css'

const RecipeItemAsBox = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title is-centered is-size-4">
          <a href={props.onClickUrl}>{props.title}</a>
        </div>
      </div >

      <div className="card-content is-size-5 has-text-left">{props.description}</div>

      <div className="card-image">
        <a href={props.onClickUrl}>
          <img src={props.imageUrl} />
        </a>
      </div>

      <div className="rating-wrap">
        <ReactStars count={5} value={props.rating} edit={false} size={30} />
      </div>

      <small>Posted by {props.postedBy}</small>
    </div>
  )
}
export default RecipeItemAsBox