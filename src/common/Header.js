import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Profile } from './'

import './Header.scss'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <div className="header-components">
          <div className="logo-div">
            <Link className="logo" to="/">
            yummy
            </Link>
          </div>
          {/* Search Bar */}

          {/* <div className="profile">
            Profile
        </div> */}
          <Profile className="profile"></Profile>
        </div>
      </div>
    )
  }
}