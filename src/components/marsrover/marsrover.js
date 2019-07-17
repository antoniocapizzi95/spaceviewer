import React, { Component } from "react";
import Input from "./Input.js";
import Grid from '@material-ui/core/Grid';

class Marsrover extends Component {
    state = {
        rover: "",
        camera: "",
        key: ""
    };
    chooseData = e => {
        e.preventDefault();
        console.log(e.target);
        let roverFromInput = e.target[0].value;
        let cameraFromInput = e.target[1].value;
        this.setState({ rover: roverFromInput, camera: cameraFromInput });
        this.getPhotos(this.state.rover, this.state.camera);

    };
    componentDidMount() {
        fetch(`http://devopsresearch.tk:5001`)
            .then(response => response.json())
            .then(key => this.setState({ key: key.key }))
    }
    getPhotos(rover, camera) {
        //console.log(dateInit)
        //console.log(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateInit}&end_date=${dateEnd}&api_key=${this.state.key}`)
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=10&camera=${camera}&api_key=${this.state.key}`)
            .then(response => response.json())
            .then(astData => this.setState({ asteroids: astData.near_earth_objects }))
            //.then(ast => console.log(this.state.asteroids));
    };
    render() {
        return (
            <div>
                <h1>Mars Rover Images</h1>
                <div>
                    <Input chooseData={this.chooseData}></Input>
                    <Grid container direction="row">

                    </Grid>

                </div>

            </div>
        );
    }
}
export default Marsrover;