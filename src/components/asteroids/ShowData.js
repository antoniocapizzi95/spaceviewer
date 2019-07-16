import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const marg = {
    margin: '20px'
};

const ShowData = props => (

    <Card style={marg} direction='row'>
        <CardContent>
            <Typography variant="h6" component="h3">
                ID: {props.asteroids.id}
            </Typography>
            <Typography variant="h5" component="h2">
                Name: {props.asteroids.name}
            </Typography>
            <Typography variant="h6" component="h3">
                Date: {props.asteroids.close_approach_data[0].close_approach_date}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" href={props.asteroids.nasa_jpl_url}>Link</Button>
        </CardActions>

    </Card>

);

export default ShowData;