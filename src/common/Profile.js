import React, {Component} from 'react';


class ProfileDropdown extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			displayMenu: false
		}


		this.showDropdownMenu = this.showDropdownMenu.bind(this);
		this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

	};
	showDropdownMenu(event) {
		event.preventDefault();
		this.setState({ displayMenu: true }, () => {
			document.addEventListener('mouseout', this.hideDropdownMenu);
		});
	}

	hideDropdownMenu() {
		this.setState({ displayMenu: false }, () => {
			document.removeEventListener('mouseover', this.hideDropdownMenu);
		});

	}

	render() {
		return (
			<div  className="dropdown" style = {{background:"lightgrey", width:"200px"}}>
			<div className="button" onMouseOver={this.showDropdownMenu}><a href ="#">Profile</a></div>

			{ this.state.displayMenu ? (
				<ul style = {{display:"inline-block"}}>
				<li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
				<li><a href="#">Integer porta risus eget quam consequat, ac consequat arcu lacinia.</a></li>
				<li><a href="#">Morbi vehicula nisi tincidunt convallis sollicitudin.</a></li>
				</ul>
			):
				(
					null
				)
			}

			</div>

		);
	}
}


export default ProfileDropdown;
