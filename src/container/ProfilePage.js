/* eslint-disable linebreak-style,indent */
import React, {Component} from 'react'

import { Link } from 'react-router-dom'
import { Container, Box, Table, Title, SubTitle, Button, Notification } from 'reactbulma'

import './onboard.css'

class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notify: false
        }
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
    }

    handleUpdatePassword() {
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
                <Title className="has-text-left">Account & Settings</Title>

                <div id="line"></div>
                <SubTitle className="has-weight-bold">Basic Information</SubTitle>
                <table width="100%" class="table is-bordered">
                    <tr>
                        <td width="25%" className="has-text-weight-bold has-background-grey-lighter">Name</td>
                        <td width="75" className="has-background-white-ter">aasdf</td>
                    </tr>
                    <tr>
                        <td width="25%" className="has-text-weight-bold has-background-grey-lighter">Email</td>
                        <td width="75" className="has-background-white-ter">aasdf</td>
                    </tr>
                </table>
                <SubTitle className="has-text-weight-bold">Password</SubTitle>

                <p id="padding"> A strong password contains a mix of numbers, letters, and symbols. It is hard to guess, does not resemble a real word,
                    and is only used for this account</p>

                <Button className="is-info" onClick={this.handleUpdatePassword}>Update Password</Button>
                <div className="notify spacing-base">
                    {this.state.notify ?
                        <Notification warning id="notify">Kappa</Notification>:
                        ''}
                </div>
            </Container>
        )
    }
}

export default ProfilePage


