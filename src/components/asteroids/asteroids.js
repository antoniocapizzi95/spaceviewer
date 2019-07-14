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
        this.state.dateInit = dateFromInputInit
        this.state.dateEnd = dateFromInputEnd
        //this.setState({ dateInit: dateFromInputInit, dateEnd: dateFromInputEnd });
        //this.setState({ dateEnd: dateFromInputEnd });
        this.getAsteroids(this.state.dateInit, this.state.dateEnd);
        //this.getAsteroids("2015-09-07", "2015-09-08");
    };
    componentDidMount() {
        fetch(`http://devopsresearch.tk:5001`)
            .then(response => response.json())
            .then(key => this.setState({ key: key.key }))
            //.then(first => this.getFirstApod());
    }
    getAsteroids (dateInit, dateEnd) {
        //console.log(dateInit)
        console.log(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateInit}&end_date=${dateEnd}&api_key=${this.state.key}`)
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateInit}&end_date=${dateEnd}&api_key=${this.state.key}`)
            .then(response => response.json())
            .then(astData => this.setState({ asteroids: astData.near_earth_objects }))
            .then(ast => console.log(this.state.asteroids));
    };
    render() {
        var arr = [];
        var json = this.state.asteroids;
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
        });
        return (
            <div>
                <h1>Asteroids</h1>
                <div>
                    <DateInput changeDate={this.changeDate}></DateInput>

                    {arr.map((value, index) => {
                        return value.map((v, i) => {
                            return <ShowData asteroids = {v}></ShowData>
                        })
                    })}

                </div>

            </div>
        );
    }
}
export default Asteroids;