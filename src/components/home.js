import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div>
                <Typography variant="h3" component="h2">Welcome to SpaceViewer</Typography>
                <div>
                    <Typography variant="h6" component="h5">
                        This portal was created to allow the viewing of information and multimedia files from the NASA archives. The data on this portal are found by the NASA Open API.
                    </Typography>
                </div>
                <div>
                    <h3>This portal contains 4 sections:</h3>
                </div>
                <h4>
                    <NavLink to="/apod"><div className="blue">NASA Astronomy Photo Of the Day</div></NavLink> In this section it is possible to see astronomical photo of the day selected by NASA, it is possible, also choose to see images of the past days
                </h4>
                <h4>
                    <NavLink to="/asteroids"><div className="blue">Asteroids</div></NavLink> In this section it is possible to see the asteroids close to the Earth in a certain period of time selectable by the user, for each asteroid is available a link that leads to the NASA website in which are present more details
                </h4>
                <h4>
                    <NavLink to="/marsrover"><div className="blue">Mars Rover Images</div></NavLink> in this section it is possible to see images taken by some rovers that have gone to Mars, it is also possible to choose which camera to use and the number of the day of which you want to see the photos taken
                </h4>
                <h4>
                    <NavLink to="/imageslibrary"><div className="blue">Images Library</div></NavLink> In this section it is possible to search a word and find some photos related to the word searched, the photos come from the image library of NASA
                </h4>

            </div>
        );
    }
}
export default Home;
























































































































































































