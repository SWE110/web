import React, {Component} from 'react'

import { Link } from 'react-router-dom'
import { Container, Box, Hero, Title, Input, Button, Notification } from 'reactbulma'

import './onboard.css'
import {userActions} from '../actions'

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notify: false,
      notify_text: '',
      username: '',
      password: '',
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

    onKeyPress = (e) => {
      if (e.keyCode === 13) {
        this.handleLogin()
      }
    }

    handleLogin() {
      this.props.history.push('/forgotConfirm')
    }

    render() {
      return (
        <Container fluid id="primary-container">
          <Box>
            <Hero>
              <Hero.Body>
                <Title className="center">
                Forgot Password
                </Title>
              </Hero.Body>
            </Hero>

            <div className="notify spacing-base">
              {this.state.notify ? 
                <Notification warning id="notify">Kappa</Notification>: 
                ''}
            </div>

            <div className="spacing-base">
              <label className="bold" htmlFor="medium">Enter your email</label>
              <Input medium id="medium"/>
            </div>

            <Button onClick={this.handleLogin}>Forgot Password</Button>
          </Box>
        </Container>
      )
    }
}

export default ForgotPasswordPage
