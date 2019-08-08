import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography';
import Apod from './components/apod/apod.js';
import Home from './components/home.js';
import Asteroids from './components/asteroids/asteroids.js';
import MarsRover from './components/marsrover/marsrover.js';
import ImagesLibrary from './components/imageslibrary/imageslibrary.js';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Button from '@material-ui/core/Button';


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
                  <NavLink to="/">
                    <Button> <div className="white"> Space Viewer </div> </Button>
                  </NavLink>
                </TypoGraphy>

                  <List component="nav">
                    <ListItem component="div">

                      <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                          <NavLink to="/apod">
                              <Button> <div className="white">APOD</div> </Button>
                          </NavLink>
                        </TypoGraphy>
                      </ListItemText>

                      <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                          <NavLink to="/asteroids">
                              <Button> <div className="white">Asteroids</div> </Button>
                          </NavLink>
                        </TypoGraphy>
                      </ListItemText>

                      <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                          <NavLink to="/marsrover">
                            <Button> <div className="white">Mars Rover Images</div> </Button>
                          </NavLink>
                        </TypoGraphy>
                      </ListItemText>

                      <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                          <NavLink to="/imageslibrary">
                            <Button> <div className="white">Images Library</div> </Button>
                          </NavLink>
                        </TypoGraphy>
                      </ListItemText>
                    </ListItem>
                  </List>
              </Toolbar>
            </AppBar>
            <div className="content padd">
              <Route exact path="/" component={Home}/>
              <Route path="/apod" component={Apod}/>
              <Route path="/asteroids" component={Asteroids}/>
              <Route path="/marsrover" component={MarsRover}/>
              <Route path="/imageslibrary" component={ImagesLibrary}/>
            </div>
          </HashRouter>
        </div>
    );
  }
}
export default App;