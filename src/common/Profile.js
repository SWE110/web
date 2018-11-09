
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
        </li>
        <li>
          <a>Integer porta risus eget quam consequat, ac consequat arcu lacinia.</a>
        </li>
        <li>
          <a>Morbi vehicula nisi tincidunt convallis sollicitudin.</a>
        </li>
      </ul>
    )
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    };
  }
  
  handleHover = (event) => {
    this.setState({ showDropDown: true });
  };
  
  handleLeave = (event) => {
    this.setState({ showDropDown: false });
  };
  
  render() {
    return (
      <ul>
      <li onMouseLeave={this.handleLeave}>
            <a onMouseEnter={this.handleHover} href="#">
              Profile
            </a>
            <div>
              
                { this.state.showDropDown && <Dropdown /> }
              
            </div>
          </li>
      </ul>

    )
  }
}

ReactDOM.render(
  <Profile />,
  document.getElementById("root")
);

export default Profile;
