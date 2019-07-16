import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const marg = {
    marginBottom: '20px'
};

const Photo = props => (
    <Grid container direction="column">
        <Card style={marg}>
            <CardContent>
                <h3>{props.photo.title}</h3>
                <img src={props.photo.url} alt={props.photo.title} />
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <p>{props.photo.explanation}</p>
            </CardContent>
        </Card>

    </Grid>
);

export default Photo;