import React from 'react'
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';


export class Main extends React.Component {
	handleGitHubLink(){
		window.open('https://github.com/anhuisunfei/anhuisunfei.github.io')
	}
	render(){
		return (
			<div>
				<AppBar
	   				 title="anhuisunfei.github.io"
	   				 showMenuIconButton={false}
	  				  iconElementRight={<IconButton onClick={this.handleGitHubLink} iconClassName="muidocs-icon-custom-github" />} 
	  			/>
	  			 
				<h1>Hello World!</h1>
			</div>	
		);
	}
}