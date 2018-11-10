/* eslint-disable linebreak-style,indent */
import React, {Component} from 'react'

import { Link } from 'react-router-dom'
import { Container, Box, Hero, Title, Input, Button, Notification } from 'reactbulma'

import './onboard.css'

class RegistrationPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notify: false
        }
        this.handleNewAccount = this.handleNewAccount.bind(this)
    }

    handleNewAccount() {
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
                                Create an Account
                            </Title>
                        </Hero.Body>
                    </Hero>

                    <div className="notify spacing-base">
                        {this.state.notify ?
                            <Notification warning id="notify">Kappa</Notification>:
                            ''}
                    </div>

                    <div className="spacing-base">
                        <label className="bold" htmlFor="medium">Name</label>
                        <Input medium id="medium"/>
                    </div>
                    <div className="spacing-base">
                        <label className="bold" htmlFor="medium">Email</label>
                        <Input medium id="medium"/>
                    </div>
                    <div className="spacing-base">
                        <label className="bold" htmlFor="medium">
                            Password
                            <Link to="/reset" className="float-right">Already have an account?</Link>
                        </label>
                        <Input medium id="medium"/>
                    </div>

                    <Button onClick={this.handleNewAccount}>Make Account</Button>
                </Box>
            </Container>
        )
    }
}

export default RegistrationPage


