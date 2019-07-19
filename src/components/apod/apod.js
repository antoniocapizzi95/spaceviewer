import React, { Component } from "react";
import DateInput from "./DateInput.js";
import Photo from "./Photo.js";
import Typography from "@material-ui/core/Typography";

class Apod extends Component {
    state = {
        date: "",
        photo: "",
        key: ""
    };
    changeDate = e => {
        e.preventDefault();
        console.log(e.target);
        let dateFromInput = e.target[0].value;
        this.setState({ date: dateFromInput });
        this.getPhoto(dateFromInput);
    };
    getFirstApod() {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.state.key}`)
            .then(response => response.json())
            .then(json => this.setState({ photo: json }));
    }
    componentDidMount() {
        fetch(`http://devopsresearch.tk:5001`)
            .then(response => response.json())
            .then(key => this.setState({ key: key.key }))
            .then(first => this.getFirstApod());
    }
    getPhoto = date => {
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${this.state.key}`)
            .then(response => response.json())
            .then(photoData => this.setState({ photo: photoData }));
    };
    render() {
        return (
            <div>
                <h1>NASA's Astronomy Picture of the Day</h1>
                <Typography variant="h6" component="h3">
                    Choose a date to see the "NASA's Astronomy Picture of the Day". By default you will see today's photo.
                </Typography>
                <DateInput changeDate={this.changeDate}/>
                <Photo photo={this.state.photo}/>
            </div>
        );
    }
}
export default Apod;