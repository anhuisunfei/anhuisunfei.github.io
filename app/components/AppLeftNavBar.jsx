import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

export  class AppLeftNavBar extends React.Component {

  constructor(props) {
    super(props); 
  }

  handleMenuTap=()=>{
    setTimeout(()=>{ 
      this.props.handleNavbarClose();
    },300);
  };

  render() {
    return (
      <div> 
        <LeftNav
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={this.props.handleNavbarOpen}
        >
          <MenuItem onTouchTap={this.handleMenuTap}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleMenuTap}>Contact</MenuItem>
        </LeftNav>
      </div>
    );
  }
}