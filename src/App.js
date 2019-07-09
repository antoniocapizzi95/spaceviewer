import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography';
import Apod from './components/apod/apod.js'
import Home from './components/home.js'
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
          <HashRouter>
            <AppBar color="primary" position="static">
              <Toolbar>
                <TypoGraphy variant="title"
                            color="inherit"
                >
                  Space Viewer
                </TypoGraphy>

                  <List component="nav">
                    <ListItem component="div">

                      <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                          <NavLink to="/"> Home </NavLink>
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
              </Toolbar>
            </AppBar>
            <div className="content">
              <Route path="/" component={Home}/>
              <Route path="/apod" component={Apod}/>
            </div>
          </HashRouter>
        </div>
    );
  }
}
export default App;