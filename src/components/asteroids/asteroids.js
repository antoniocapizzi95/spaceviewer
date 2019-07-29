import React, { Component } from "react";
import DateInput from "./DateInput.js";
import ShowData from "./ShowData.js";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

class Asteroids extends Component {
    state = {
        dateInit: "",
        dateEnd: "",
        asteroids: "",
        key: ""
    };
    changeDate = e => {
        e.preventDefault();
        console.log(e.target);
        let dateFromInputInit = e.target[0].value;
        let dateFromInputEnd = e.target[1].value;
        this.setState({dateInit: dateFromInputInit, dateEnd: dateFromInputEnd});
        this.getAsteroids(dateFromInputInit, dateFromInputEnd);
    };
    componentDidMount() {
        fetch(`http://devopsresearch.tk:5001`)
            .then(response => response.json())
            .then(key => this.setState({ key: key.key }));
    }
    getAsteroids (dateInit, dateEnd) {
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateInit}&end_date=${dateEnd}&api_key=${this.state.key}`)
            .then(response => response.json())
            .then(astData => this.setState({ asteroids: astData.near_earth_objects }))
            .then(ast => console.log(this.state.asteroids));
    };
    render() {
        var arr = [];
        var json = this.state.asteroids;
        if(json != undefined) {
            Object.keys(json).forEach(function(key) {
                arr.push(json[key]);
                console.log(json[key]);
            });
        }

        return (
            <div>
                <h1>Asteroids</h1>
                <Typography variant="h6" component="h3">
                    Choose a start and end date to see which asteroids have passed near the earth in the selected period.
                </Typography>
                <div>
                    <DateInput changeDate={this.changeDate}></DateInput>
                    <Grid container direction="row">
                        {arr.map((value, index) => {
                            return value.map((v, i) => {
                                return <ShowData asteroids = {v}></ShowData>
                            })
                        })}
                    </Grid>

                </div>

            </div>
        );
    }
}
export default Asteroids;