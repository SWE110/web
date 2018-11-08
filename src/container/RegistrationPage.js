import React, {Component} from 'react'

class Registration extends Component {
  constructor(props) {
    super(props)

  }


  render() {
        
    return (
      <div>
        <header>
          <h1>Create an Account</h1>
        </header>

        <label>Name</label>
        <input/>
        <label>Enter email</label>
        <input/>
        <label>Enter Password</label>
        <input/>
        <button>Create Account!</button>
      </div>
    )
  }
}

export default LoginPage
