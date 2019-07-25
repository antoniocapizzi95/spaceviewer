import React, { Component } from "react";
import Input from "./Input.js";
import ShowData from "./ShowData.js";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class ImagesLibrary extends Component {
    state = {
        word: '',
        images: {}
    };
    search = e => {
        e.preventDefault();
        console.log(e.target);
        let wordFromInput = e.target[0].value;
        this.state.word = wordFromInput;
        this.setState({ word: wordFromInput });

        this.getImages(wordFromInput);

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
            .then(imagesData => this.setState({ images: imagesData.collection.items }))
            .then(img => this.fixData(this.state.images));
            //.then(img => console.log(this.state.images));
    };
    fixData(img) {
        if(img.length > 20) {
            img = img.slice(0, 20);
        }
        var newimg = [];
        /*for(var i in img){
            var link = i.links[0].href;
            var desc = i.data[0].description;
            newimg.append({img_link: link, description: desc});
        }*/
        img.forEach(function(element) {
            var link = element.links[0].href;
            var desc = element.data[0].description;
            newimg.push({img_link: link, description: desc});
        });
        console.log(newimg);
        this.setState({images: newimg})
    }
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
                   <Input search={this.search}></Input>
                    <Grid container direction="row">
                        {arr.map((value, index) => {
                            return  (
                                <ShowData images={value}></ShowData>

                            )
                        })
                        }
                    </Grid>
                </div>

            </div>
        );
    }
}
export default ImagesLibrary;