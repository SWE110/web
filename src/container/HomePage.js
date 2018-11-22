/* eslint-disable linebreak-style,linebreak-style */
import React, {Component} from 'react'

import HomeBody from '../common/Body'

import { Link } from 'react-router-dom'
import { Level } from 'reactbulma'


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="has-text-centered">
        <HomeBody/>
      </div>
    )
  }

}

export default HomePage