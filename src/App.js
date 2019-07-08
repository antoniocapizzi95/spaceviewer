import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './components/navbar.js';
import Apod from './components/apod/apod.js'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";


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
              <HashRouter>
                <List component="nav">
                  <ListItem component="div">

                    <ListItemText inset>
                      <TypoGraphy color="inherit" variant="title">
                        Home
                      </TypoGraphy>
                    </ListItemText>


                    <ListItemText inset>
                      <TypoGraphy color="inherit" variant="title">
                        <NavLink to="/apod"> APOD </NavLink>
                      </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset>
                      <TypoGraphy color="inherit" variant="title">
                        Asteroids
                      </TypoGraphy>
                    </ListItemText>
                  </ListItem>
                </List>
                <div className="content">
                  <Route path="/apod" component={Apod}/>
                </div>
              </HashRouter>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}
export default App;