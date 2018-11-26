
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import { faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Dropdown } from './'
import './Profile.scss'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isLoggedIn: false
    }
  }
  
  onHover = (event) => {
    this.setState({ isOpen: true })
  };
  
  onLeave = (event) => {
    this.setState({ isOpen: false })
  };

  //login, regsiter, 
  
  render() {
    const { isOpen, isLoggedIn } = this.state
    const settings = []
    if (isLoggedIn) {
      settings.push({ name: 'Profile', link: '/profile' })
    } else {
      settings.push({ name: 'Login', link: '/login' })
      settings.push({ name: 'Register', link: '/register' })
    }

    return (
      <div className="profile" onMouseLeave={this.onLeave}>
        <Link onMouseEnter={this.onHover} to={ isLoggedIn ? '/profile' : '/login'}>
          <div className="profile-text">hi.</div>
          {
            isOpen ? 
              <FontAwesomeIcon icon={faCaretUp} /> :
              <FontAwesomeIcon icon={faCaretDown} />
          }
        </Link>
        {
          isOpen && <Dropdown title="Hello" items={settings} />
        }
      </div>
    )
  }
}

export default Profile
