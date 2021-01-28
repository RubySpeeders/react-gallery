import React, { Component } from 'react';

//MATERIAL-UI IMPORTS
import { AppBar } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <h1 className="App-title">Gallery of my life</h1>
        </AppBar>
      </div>
    );
  }
}

export default Header;
