import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './components/navbar.js';
import Apod from './components/apod/apod.js'

class App extends Component {
  render() {
    return (
        <div>
          <AppBar color="primary" position="static">
            <Toolbar>
              <TypoGraphy variant="title"
                          color="inherit"
              >
                Space Viewer
              </TypoGraphy>
              <NavBar></NavBar>
                <Apod></Apod>
            </Toolbar>
          </AppBar>

        </div>
    );
  }
}
export default App;