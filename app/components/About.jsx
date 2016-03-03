import React from 'react' 

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		 
	} 

	render(){
		let styles={ 
			about:{
				minHeight: '50em'
			},
			container: {
				'margin': '0 auto',
				padding: '2em 1em',
				'backgroundColor': '#f7f7f7'
			},
			abouttitle: {
				color: '#00bcd4',
				fontSize: '24px',
				fontWeight: '600',
				marginTop: '0',
				marginBottom: '30px'
			},
			info: {
				display: 'block',
				listStyleType: 'disc',
				WebkitMarginBefore: '1em',
				WebkitMarginAfter: '1em',
				WebkitMarginStart: '0px',
				WebkitMarginEnd: ' 0px',
				WebkitPaddingStart: '40px'
			},
			infoitem:{
				listStyleType: ' none',
				borderBottom: '1px solid #eee',
				color: ' #727272',
				fontSize: '14px',
				marginBottom: '12px',
				paddingBottom: '12px'
			}
		}
		return (
			<div style={styles.about}>
				<div style={styles.container}>
					<h3 style={styles.abouttitle}>联系方式</h3> 	
					<ul style={styles.info}>
						<li style={styles.infoitem}>姓名:孙飞</li>
						<li style={styles.infoitem}>邮箱:anhuisunfei@gmail.com</li>
						<li style={styles.infoitem}>微信:SF1000001</li>
					</ul>
				</div>
	      	</div>
		);
	}
}