import React, {Component} from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        ;
        return (
            <div>
                <header>
                    <h1>Login</h1>
                </header>

                <label>Enter email</label>
                <input/>
                <label>Enter Password</label>
                <input/>
                <button>Log me in!</button>
            </div>
        );
    }
}

export default LoginPage;