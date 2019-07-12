import React, { Component } from "react";
import DateInput from "./DateInput.js";

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

        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date[0]}&end_date=${date[1]}8&api_key=${this.state.key} `)
            .then(response => response.json())
            .then(photoData => this.setState({ asteroids: photoData }));
    };
    render() {
        return (
            <div>
                <h1>Asteroids</h1>
                <div>
                    <DateInput changeDate={this.changeDate}></DateInput>
                    <p></p>
                </div>

            </div>
        );
    }
}
export default Asteroids;