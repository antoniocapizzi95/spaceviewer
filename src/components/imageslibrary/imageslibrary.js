import React, { Component } from "react";
import Input from "./Input.js";
import ShowData from "./ShowData.js";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

class ImagesLibrary extends Component {
    state = {
        word: '',
        images: {},
        showImages: true
    };
    search = e => {
        e.preventDefault();
        console.log(e.target);
        let wordFromInput = e.target[0].value;
        this.setState({ word: wordFromInput });
        this.getImages(wordFromInput);
    };

    getImages(word) {
        fetch(`https://images-api.nasa.gov/search?q=${word}&media_type=image`)
            .then(response => response.json())
            .then(imagesData => this.setState({ images: imagesData.collection.items }))
            .then(img => this.fixData(this.state.images));
    };
    fixData(img) {
        if(img.length === 0) {
            this.setState({showImages: false});
        } else {
            this.setState({showImages: true});
        }
        if(img.length > 20) {
            img = img.slice(0, 20);
        }
        var newimg = [];
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
       if(json.length > 0){
           Object.keys(json).forEach(function(key) {
               arr.push(json[key]);
           });
       }

        return (
            <div>
                <h1>Images Library</h1>
                <Typography variant="h6" component="h3">
                    Enter a word to search Images from NASA's Library about it
                </Typography>
                <div>
                   <Input search={this.search}></Input>
                    {this.state.showImages ?
                        (<Grid container direction="row">
                            {arr.map((value, index) => {
                                    return  (
                                        <ShowData images={value}></ShowData>
                                    )
                                })
                            }
                        </Grid>): <Typography variant="h7" component="h4">No images found</Typography>}

                </div>

            </div>
        );
    }
}
export default ImagesLibrary;