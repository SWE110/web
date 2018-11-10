import React, {Component} from 'react'

import { Link } from 'react-router-dom'
import { Container, Box, Hero, Title, Input, Button, Notification } from 'reactbulma'

import './onboard.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notify: false
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState(state => ({
      notify: !state.notify
    }))
    setTimeout(() => {
      this.setState(state => ({
        notify: false
      }))
    }, 1000)
  }

  render() {
    return (
      <Container fluid id="primary-container">
        <Box>
          <Hero>
            <Hero.Body>
              <Title>
                Login
              </Title>
            </Hero.Body>
          </Hero>

          <div className="notify spacing-base">
            {this.state.notify ? 
              <Notification warning id="notify">Kappa</Notification>: 
              ''}
          </div>

          <div className="spacing-base">
            <label className="bold" htmlFor="medium">Email</label>
            <Input medium id="medium"/>
          </div>
          <div className="spacing-base">
            <label className="bold" htmlFor="medium">
              Password
              <Link to="/reset" className="float-right">Forgot Password</Link>
            </label>
            <Input medium id="medium"/>
          </div>

          <Button onClick={this.handleLogin}>Log me in! Kappa</Button>
        </Box>
      </Container>
    )
  }
}

export default LoginPage
