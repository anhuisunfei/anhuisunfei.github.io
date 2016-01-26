import React from 'react'
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import {AppLeftNavBar} from './AppLeftNavBar';
import Home from './Home';
import Contact from './Home';


export class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbaropen: false
		};
	}

	handleGitHubLink=()=>window.open('https://github.com/anhuisunfei/anhuisunfei.github.io'); 

	handleNavbarOpen=()=>this.setState({navbaropen:!this.state.navbaropen});

	handleNavbarClose=()=>{
		this.setState({navbaropen:false})
	};

	render(){
		const { content } = this.props

		return (
			<div>
				<AppBar
	   				 title="anhuisunfei.github.io"
	   				 iconClassNameRight="muidocs-icon-navigation-expand-more"
	   				 onLeftIconButtonTouchTap={this.handleNavbarOpen}
	  				 iconElementRight={<IconButton onClick={this.handleGitHubLink} iconClassName="muidocs-icon-custom-github" />} 
	  			/>
	  			 <AppLeftNavBar open={this.state.navbaropen} handleNavbarOpen={this.handleNavbarOpen} handleNavbarClose={this.handleNavbarClose} /> 
				<div className="container">
					{content || <Home />}
				</div>
			</div>	
		);
	}
}