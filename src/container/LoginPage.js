/* eslint-disable linebreak-style */
import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Container, Box, Hero, Title, Input, Button, Notification } from 'reactbulma'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userActions } from '../actions'
import './onboard.css'

class LoginPage extends Component {
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

  handleLogin() {
    this.setState(state => ({
      notify: !state.notify
    }))
    // setTimeout(() => {
    //   this.setState(state => ({
    //     notify: false
    //   }))
    // }, 1000)


    let loginpackage = {
      username: this.state.username,
      password: this.state.password,
    }

    this.props.dispatch(userActions.userLogin(loginpackage))

  }

  updateUsername(e) {
    const myusername = e.target.value
    this.setState({ username: myusername })

  }

  updatePassword(e) {
    const mypassword = e.target.value
    this.setState({ password: mypassword })

  }



  render() {
    const loggedIn = this.props.users.loggedIn
    const loginFailed = this.props.users.loginFailed
    const loggingIn = this.props.users.loggingIn
    return (
      <Container fluid id="primary-container">
        <Box>
          <Hero>
            <Hero.Body>
              <Title className="center">
                Login
              </Title>
            </Hero.Body>
          </Hero>

          <div className="notify spacing-base">
            {this.props.users.loginFailed ?
              <Notification warning id="notify">Invalid Username or Password</Notification> :
              ''}
          </div>

          <div className="spacing-base">
            <label className="bold" htmlFor="medium">Username</label>
            <Input medium id="username" onChange={(e) => this.updateUsername(e)} value={this.state.username} />
          </div>
          <div className="spacing-base">
            <label className="bold" htmlFor="medium">
              Password
              <span className="has-text-link"> <Link to="/reset" >Forgot Password</Link> </span>

            </label>
            <Input medium id="password" onChange={(e) => this.updatePassword(e)} value={this.state.password} type='password' />
          </div>

          <Button onClick={this.handleLogin}>Log me in!</Button>

          <br></br>
          {/* Redirect to main page upon login */}
          {loggedIn ? this.props.history.push('/') : ''}

        </Box>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const { users } = state
  return {
    users
  }
}

//export default LoginPage
export default withRouter(connect(mapStateToProps)(LoginPage))
