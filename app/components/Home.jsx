import React from 'react' 

export default class Home extends React.Component {
	constructor(props) {
		super(props); 
	}
 	

	render(){
		let styles = {
			home: {
				background: 'url("public/images/home-bg.jpg") no-repeat fixed center center/cover',
				height: 'calc(100vh - 64px)'
			},
			overlay:{
			    background: 'rgba(0, 0, 0, 0.7)',
    			height: '100%'
			},
			content: {
				height: '100%',
				color: '#fff',
				display: '-webkit-box',
				display: '-webkit-flex',
				display: '-ms-flexbox',
				display: 'flex',
				'-webkit-box-orient': 'vertical',
				'-webkit-box-direction': 'normal',
				'-webkit-flex-direction': 'column',
				'-ms-flex-direction': 'column',
				'flex-direction': 'column',
				'-webkit-box-pack': 'center',
				'-webkit-justify-content': 'center',
				'-ms-flex-pack': 'center',
				'justify-content': 'center',
				'-webkit-box-align': 'center',
				'-webkit-align-items': 'center',
				'-ms-flex-align': 'center',
				'align-items': 'center'
			},
			title:{
				'font-size': '35px',
				'font-weight': '700',
				'margin-bottom': '15px',
				'margin-top': '0',
				'text-align': ' center',
				display: 'block',
				'font-size': '2em',
				'-webkit-margin-before': '0.67em',
				'-webkit-margin-after': '0.67em',
				'-webkit-margin-start': '0px',
				'-webkit-margin-end': '0px',
				'font-weight': 'bold'
			}
		}
		return (
			<div className="home">
		        <div className="overlay">
		          <div className="content">
		            <h1 className="title">
		              <span>欢迎来到</span>
		              <span className="name">孙飞的个人主页</span>
		            </h1>
		          </div>
		        </div>
		     </div>
		);
	}
}