import React, { Component } from "react";
import Input from "./Input.js";
//import ShowData from "./ShowData.js";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

class ImagesLibrary extends Component {
    state = {
        word: '',
        images: {}
    };
    changeDate = e => {
        e.preventDefault();
        console.log(e.target);
        let wordFromInput = e.target[0].value;
        this.state.word = wordFromInput;
        this.setState({ word: wordFromInput });
        //this.setState({ dateEnd: dateFromInputEnd });
        this.getImages(wordFromInput);
        //this.getAsteroids("2015-09-07", "2015-09-08");
    };
    /*componentDidMount() {
        fetch(`http://devopsresearch.tk:5001`)
            .then(response => response.json())
            .then(key => this.setState({ key: key.key }))
        //.then(first => this.getFirstApod());
    }*/
    getImages(word) {
        fetch(`https://images-api.nasa.gov/search?q=${word}&media_type=image`)
            .then(response => response.json())
            .then(imagesData => this.setState({ images: imagesData.items }))
            .then(ast => console.log(this.state.images));
    };
    render() {
        var arr = [];
        var json = this.state.images;
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
        });
        return (
            <div>
                <h1>Images Library</h1>
                <Typography variant="h6" component="h3">
                    Choose a start and end date to see which asteroids have passed near the earth in the selected period.
                </Typography>
                <div>
                   <Input changeDate={this.changeDate}></Input>
                    <Grid container direction="row">
                        {arr.map((value, index) => {
                            return value.map((v, i) => {
                                return <div asteroids = {v}></div>
                            })
                        })}
                    </Grid>

                </div>

            </div>
        );
    }
}
export default ImagesLibrary;