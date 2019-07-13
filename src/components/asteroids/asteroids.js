import React, { Component } from "react";
import DateInput from "./DateInput.js";
import ShowData from "./ShowData.js"

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
        this.setState({ dateInit: dateFromInputInit });
        this.setState({ dateEnd: dateFromInputEnd });
        this.getAsteroids([this.state.dateInit, this.state.dateEnd]);
    };
    componentDidMount() {
        fetch(`http://devopsresearch.tk:5001`)
            .then(response => response.json())
            .then(key => this.setState({ key: key.key }))
            //.then(first => this.getFirstApod());
    }
    getAsteroids = date => {

        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date[0]}&end_date=${date[1]}&api_key=${this.state.key} `)
            .then(response => response.json())
            .then(astData => this.setState({ asteroids: astData }))
            .then(ast => console.log(this.state.asteroids));
    };
    render() {
        return (
            <div>
                <h1>Asteroids</h1>
                <div>
                    <DateInput changeDate={this.changeDate}></DateInput>

                    {this.state.asteroids.near_earth_objects.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                    <ShowData asteroids={this.state.asteroids.near_earth_objects}></ShowData>
                </div>

            </div>
        );
    }
}
export default Asteroids;