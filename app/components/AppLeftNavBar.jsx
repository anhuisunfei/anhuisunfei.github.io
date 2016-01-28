import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Home from 'material-ui/lib/svg-icons/action/home';
import Contact from 'material-ui/lib/svg-icons/communication/contacts';
import RaisedButton from 'material-ui/lib/raised-button';
import {Link} from 'react-router';

export  class AppLeftNavBar extends React.Component {

  constructor(props,context) {
    super(props); 
  }
  static contextTypes = {
    history: React.PropTypes.object.isRequired,
  };
  handleMenuTap=(link)=>{
    
    this.context.history.pushState(null,link)
    setTimeout(()=>{ 
      this.props.handleNavbarClose();
    },150);
  };

  render() {
    let styles = {
      header: {
        cursor: 'pointer',
        fontSize: '24px',
        color: '#fff',
        lineHeight: '64px',
        fontWeight: '300',
        backgroundColor: '#00bcd4',
        paddingLeft: '24px',
        paddingTop: '0px',
        marginBottom: '8px',
      },
      selectedList: {
        color: '#ff4081',
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
      }
    };
    return (
      <div> 
        <LeftNav
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={this.props.handleNavbarOpen}
        >
          <MenuItem  leftIcon={<Home />}    onTouchTap={this.handleMenuTap.bind(this,'/Home')}>Home</MenuItem>
          <MenuItem leftIcon={<Contact />}   onTouchTap={this.handleMenuTap.bind(this,'/Contact')}>Contact</MenuItem>
        </LeftNav>
      </div>
    );
  }
}