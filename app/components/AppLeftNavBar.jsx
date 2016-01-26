import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Home from 'material-ui/lib/svg-icons/action/home';
import Contact from 'material-ui/lib/svg-icons/communication/contacts';
import RaisedButton from 'material-ui/lib/raised-button';
import {Link} from 'react-router';

export  class AppLeftNavBar extends React.Component {

  constructor(props) {
    super(props); 
  }

  handleMenuTap=()=>{
    setTimeout(()=>{ 
      this.props.handleNavbarClose();
    },150);
  };

  render() {
    const homeLink=<Link to='/Home' />;
    const contactLink=<Link to="/Contact" />;
    
    return (
      <div> 
        <LeftNav
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={this.props.handleNavbarOpen}
        >
          <MenuItem  leftIcon={<Home />}  containerElement={<Link to="/Home" />} onTouchTap={this.handleMenuTap}>Home</MenuItem>
          <MenuItem leftIcon={<Contact />}  containerElement={<Link to="/Contact" />} onTouchTap={this.handleMenuTap}>Contact</MenuItem>
        </LeftNav>
      </div>
    );
  }
}