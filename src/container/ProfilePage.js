/* eslint-disable linebreak-style,indent */
import React, {Component} from 'react'

import { Link } from 'react-router-dom'
import { Container, Box, Table, Title, SubTitle, Button, Input, Notification } from 'reactbulma'

import './onboard.css'

var notification = 'Information Updated'
var name  = 'a;lskdjfa;ls'
var email = 'asdfas'

class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notify: false
        }
        this.handleUpdateInfo = this.handleUpdateInfo.bind(this)
    }

    handleUpdateInfo() {
        this.setState(state => ({
            notify: !state.notify
        }))
        if(this.state.notify){
            var newName = document.getElementById('newName').value
            var newPass = document.getElementById('newPass').value


            if(newName == '' && newPass == ''){
                notification = 'No new information entered'
            }

        }

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
                        <td width="20%" className="has-text-weight-bold has-background-grey-lighter">Name</td>
                        <td width="40%" className="has-background-white-ter">
                            {name}
                            <input className="input" type="text" placeholder="Insert new name" id="newName"></input>
                        </td>
                    </tr>
                    <tr>
                        <td width="20%" className="has-text-weight-bold has-background-grey-lighter">Email</td>
                        <td width="40%" className="has-background-white-ter">{email}</td>
                    </tr>
                </table>
                <SubTitle className="has-text-weight-bold">Password</SubTitle>

                <p> A strong password contains a mix of numbers, letters, and symbols. It is hard to guess, does not resemble a real word,
                    and is only used for this account</p>
                <div id="padding"></div>
                <input  className="input" type="password" placeholder="Insert new password" id="newPass"></input>
                <div id="padding"></div>
                <input className="button is-info" type="submit" value="Submit Changes" onClick={this.handleUpdateInfo}></input>
                <div className="notify spacing-base">
                    {this.state.notify ?
                        <Notification warning id="notify">{notification}</Notification>:
                        ''}
                </div>
            </Container>
        )
    }
}

export default ProfilePage


