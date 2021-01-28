import React, { Component } from 'react';

//MATERIAL-UI IMPORTS
import { AppBar, Typography } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar style={{ position: 'static', left: 0, top: 0 }}>
          <Typography component="h1" variant="h3" className="App-title">
            MY GALLERY
          </Typography>
        </AppBar>
      </div>
    );
  }
}

export default Header;
