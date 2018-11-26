/* eslint-disable linebreak-style,linebreak-style */
import React, {Component} from 'react'

import { Header, SearchBar }from '../common/'
import { Link } from 'react-router-dom'

import { faJedi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactbulma'

import './HomePage.scss'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="home-container">
          {/* <Header/> */}
          <div className="home-header">
            <div className="spacing"></div>
            <div className="links">
              <Link className="link" to="/login">Login</Link>
              <Link className="link" to="/register">Register</Link>
            </div>
          </div>
          <div className="main home">
            <div className="home-logo">
              <FontAwesomeIcon icon={faJedi}/>
            </div>
            <h1 className="logo">
            yummy
            </h1>
            <h2 className="bold">
            Find recipes by name or ingredient
            </h2>
          
            <div>
              <SearchBar />
            </div>

          </div>
        </div>
        <div>
          {/* Todo recommendations */}
        </div>
      </div>
    )
  }

}

export default HomePage