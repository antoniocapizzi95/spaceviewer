import React, { Component } from "react";
import Input from "./Input.js";
import Grid from '@material-ui/core/Grid';
import ShowData from "../asteroids/ShowData";

class Marsrover extends Component {
    state = {
        rover: "",
        camera: "",
        photos: [],
        sol: '',
        key: ""
    };
    chooseData = e => {
        e.preventDefault();
        console.log(e.target);
        let roverFromInput = e.target[0].value;
        let cameraFromInput = e.target[1].value;
        let solFromInput = e.target[2].value;
        this.setState({ rover: roverFromInput, camera: cameraFromInput, sol: solFromInput });
        this.getPhotos(roverFromInput, cameraFromInput, solFromInput);
    };
    componentDidMount() {
        fetch(`http://devopsresearch.tk:5001`)
            .then(response => response.json())
            .then(key => this.setState({ key: key.key }))
    }
    getPhotos(rover, camera, sol) {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${this.state.key}`)
            .then(response => response.json())
            .then(photosData => this.setState({ photos: photosData.photos }))
            .then(pho => console.log(this.state.photos));
    };
    render() {
        var arr = [];
        var json = this.state.photos;
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
            console.log(arr);
        });
        return (
            <div>
                <h1>Mars Rover Images</h1>
                <div>
                    <Input chooseData={this.chooseData}></Input>
                    <Grid container direction="row">
                        {arr.map((value, index) => {
                            return  <img src={value.img_src}></img>
                            })
                        }
                    </Grid>

                </div>

            </div>
        );
    }
}
export default Marsrover;




























































































